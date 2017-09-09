export interface TokenData {
    /**
     * TOKEN值
     */
    access_token: string;
    /**
     * TOKEN过期时间，格式：timestamp
     */
    expire_time: number;

    /**
     * 刷新token
     */
    refresh_token?: string;

    /**
     * 刷新Token有效时间，格式：timestamp
     */
    refresh_token_valid_time?: number;

    [key: string]: any;
}
