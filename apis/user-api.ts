/* tslint:disable */
/* eslint-disable */
/**
 * Bee's Knees API
 * Bee's Knees backend API.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AccessToken } from '../models';
import { ApiResponse } from '../models';
import { TokenInfo } from '../models';
import { User } from '../models';
import { UserInfo } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Check the access token validity
         * @summary Check the access token validity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAccessToken: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/checkAccessToken`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Login
         * @summary Login
         * @param {User} body User auth info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (body: User, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling login.');
            }
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get new access token using the refresh token
         * @summary Get new access token using the refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshAccessToken: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/refreshAccessToken`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication refreshBearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Add a new user
         * @summary Add a new user
         * @param {User} body User auth info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser: async (body: User, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling registerUser.');
            }
            const localVarPath = `/registerUser`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Check the access token validity
         * @summary Check the access token validity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkAccessToken(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenInfo>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).checkAccessToken(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Login
         * @summary Login
         * @param {User} body User auth info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(body: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserInfo>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).login(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get new access token using the refresh token
         * @summary Get new access token using the refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshAccessToken(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccessToken>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).refreshAccessToken(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Add a new user
         * @summary Add a new user
         * @param {User} body User auth info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerUser(body: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).registerUser(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Check the access token validity
         * @summary Check the access token validity
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAccessToken(options?: any): AxiosPromise<TokenInfo> {
            return UserApiFp(configuration).checkAccessToken(options).then((request) => request(axios, basePath));
        },
        /**
         * Login
         * @summary Login
         * @param {User} body User auth info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(body: User, options?: any): AxiosPromise<UserInfo> {
            return UserApiFp(configuration).login(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Get new access token using the refresh token
         * @summary Get new access token using the refresh token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshAccessToken(options?: any): AxiosPromise<AccessToken> {
            return UserApiFp(configuration).refreshAccessToken(options).then((request) => request(axios, basePath));
        },
        /**
         * Add a new user
         * @summary Add a new user
         * @param {User} body User auth info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerUser(body: User, options?: any): AxiosPromise<void> {
            return UserApiFp(configuration).registerUser(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * Check the access token validity
     * @summary Check the access token validity
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public checkAccessToken(options?: any) {
        return UserApiFp(this.configuration).checkAccessToken(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Login
     * @summary Login
     * @param {User} body User auth info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public login(body: User, options?: any) {
        return UserApiFp(this.configuration).login(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get new access token using the refresh token
     * @summary Get new access token using the refresh token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public refreshAccessToken(options?: any) {
        return UserApiFp(this.configuration).refreshAccessToken(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Add a new user
     * @summary Add a new user
     * @param {User} body User auth info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public registerUser(body: User, options?: any) {
        return UserApiFp(this.configuration).registerUser(body, options).then((request) => request(this.axios, this.basePath));
    }
}
