/**
 * Janun API
 * REST API for Janun Backend Service by Team QuantumGuys
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { ChangePasswordRequest, ForgotPasswordRequest, GeneralResponse, LoginRequest, LoginResponse, RegisterRequest, ResetPasswordRequest, User, UsernameAvailableResponse } from '../models/index';
export interface ChangePasswordOperationRequest {
    changePasswordRequest: ChangePasswordRequest;
}
export interface CheckUsernameRequest {
    username: string;
}
export interface ConfirmEmailRequest {
    token: string;
}
export interface ForgotPasswordOperationRequest {
    forgotPasswordRequest: ForgotPasswordRequest;
}
export interface LoginOperationRequest {
    loginRequest: LoginRequest;
}
export interface RegisterOperationRequest {
    registerRequest: RegisterRequest;
}
export interface ResetPasswordOperationRequest {
    resetPasswordRequest: ResetPasswordRequest;
}
/**
 *
 */
export declare class AuthApi extends runtime.BaseAPI {
    /**
     * Change the user\'s password
     */
    changePasswordRaw(requestParameters: ChangePasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * Change the user\'s password
     */
    changePassword(requestParameters: ChangePasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     * Check if the username is available
     */
    checkUsernameRaw(requestParameters: CheckUsernameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsernameAvailableResponse>>;
    /**
     * Check if the username is available
     */
    checkUsername(requestParameters: CheckUsernameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsernameAvailableResponse>;
    /**
     * Confirm the user\'s email using the token sent to the user\'s email
     */
    confirmEmailRaw(requestParameters: ConfirmEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralResponse>>;
    /**
     * Confirm the user\'s email using the token sent to the user\'s email
     */
    confirmEmail(requestParameters: ConfirmEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralResponse>;
    /**
     * Send a password reset link to the user\'s email. Username or email can be used to send the link.
     */
    forgotPasswordRaw(requestParameters: ForgotPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralResponse>>;
    /**
     * Send a password reset link to the user\'s email. Username or email can be used to send the link.
     */
    forgotPassword(requestParameters: ForgotPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralResponse>;
    /**
     * Get user details if authenticated or throw an exception if not authenticated
     */
    getUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * Get user details if authenticated or throw an exception if not authenticated
     */
    getUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     * Login with (username or email) and password
     */
    loginRaw(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResponse>>;
    /**
     * Login with (username or email) and password
     */
    login(requestParameters: LoginOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResponse>;
    /**
     * Logout the user by deleting the token cookie
     */
    logoutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralResponse>>;
    /**
     * Logout the user by deleting the token cookie
     */
    logout(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralResponse>;
    /**
     */
    registerRaw(requestParameters: RegisterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     */
    register(requestParameters: RegisterOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     * Resend the confirmation email to the user\'s email
     */
    resendConfirmationEmailRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralResponse>>;
    /**
     * Resend the confirmation email to the user\'s email
     */
    resendConfirmationEmail(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralResponse>;
    /**
     * Reset the user\'s password using the token sent to the user\'s email
     */
    resetPasswordRaw(requestParameters: ResetPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * Reset the user\'s password using the token sent to the user\'s email
     */
    resetPassword(requestParameters: ResetPasswordOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
}