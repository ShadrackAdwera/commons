class HttpError extends Error {
    private errorCode: number;
    constructor(public message: string, private code: number) {
        super(message);
        this.errorCode = code;
    }
}

export default HttpError;