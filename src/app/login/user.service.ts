import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {environment} from "../../environments/environment";

export const LOGIN_PATH = environment.endpoints.HOST + environment.endpoints.AUTH_BASE_URI;

@Injectable()
export class UserService {
    private loggedIn = false;



    get username(): string {
        return localStorage.getItem('username')
    }

    set username(value: string) {
        localStorage.setItem('username', value)
    }

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(username, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.buildBasicAuthHeader(username, password));


        return this.http.post(LOGIN_PATH, '', {headers})
            .map(res => res.json())
            .map((res) => {
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                    this.username = username;
                }

                return res.success;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }



    buildBasicAuthHeader(user, password){
            let tok = user + ':' + password;
            let hash = btoa(tok);
            return "Basic " + hash;
    }
}