import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs/internal/observable/of";
import { delay } from "rxjs/internal/operators/delay";

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  private theToken = 'cevatokensupersmen';
  private adminToken = 'admintoken';


  private readonly _MOCK_RESPONSE = of(
    new HttpResponse({
      status: 200,
      statusText: 'OK'
    })
  ).pipe(delay(1000));

  private readonly _MOCK_RESPONSE_NOT_FOUND = of(
    new HttpResponse({
      status: 404,
      statusText: 'not found'
    })
  ).pipe(delay(1000));

  private readonly _MOCK_RESPONSE_TOKEN = of(
    new HttpResponse({
      status: 200,
      statusText: 'OK',
      body: { token: this.theToken }
    })
  ).pipe(delay(1000));

  private readonly _MOCK_RESPONSE_ADMIN_TOKEN = of(
    new HttpResponse({
      status: 200,
      statusText: 'OK',
      body: { token: this.adminToken }
    })
  ).pipe(delay(1000));


  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.method === 'POST' && request.url.endsWith('/api/signup')) {
      localStorage.setItem(request.body.username,
        JSON.stringify({ password: request.body.password, admin: request.body.admin })
      )

      if(request.body.admin) return this._MOCK_RESPONSE_ADMIN_TOKEN;
      return this._MOCK_RESPONSE_TOKEN;
    }

    if (request.method === 'POST' && request.url.endsWith('/api/login')) {
      let user = localStorage.getItem(request.body.username);

      if( user && JSON.parse(user).password === request.body.password ) {
        if (JSON.parse(user).admin) {
          return this._MOCK_RESPONSE_ADMIN_TOKEN;
        }

        return this._MOCK_RESPONSE_TOKEN;
      }

      return this._MOCK_RESPONSE_NOT_FOUND;
    }

    return next.handle(request);
  }
}