# Common HTTP Status Codes

## 1xx - Informational

-   100: Continue - Request received, please continue with the request.
-   101: Switching Protocols - Server is changing protocols according to the client's request.
-   102: Processing - Server still processing, request not rejected.
-   103: Early Hints - Server hints about resources that might be included in response.
-   104: Connection Reset - The connection was reset by the server while processing the request.

## 2xx - Success

-   200: OK - Successful request, often a GET.
-   201: Created - Successful request after a create, usually a POST.
-   202: Accepted - The request has been accepted but may not be processed yet.
-   204: No Content - Successful request with no content returned, usually a PUT or PATCH.
-   205: Reset Content - Reset the document view, and clear the form data.
-   206: Partial Content - The server is delivering only part of the resource due to a range request.

## 3xx - Redirection

-   300: Multiple Choices - Multiple options for the requested resource.
-   301: Moved Permanently - Permanently redirect to another endpoint.
-   302: Found (Moved Temporarily) - The requested resource is temporarily located at a different URI.
-   304: Not Modified - Indicates that the resource has not been modified since the version specified by the request headers.

## 4xx - Client Error

-   400: Bad Request - The server cannot or will not process the request due to a client error.
-   401: Unauthorized - Credentials are missing or invalid for the requested resource.
-   403: Forbidden - The server understood the request, but the client doesn't have permission.
-   404: Not Found - The resource does not exist (page not found).
-   405: Method Not Allowed - The method specified in the request is not allowed for the resource.
-   406: Not Acceptable - The server cannot produce a response matching the list of acceptable values.
-   408: Request Timeout - The server timed out waiting for the request.

## 5xx - Server Error

-   500: Internal Server Error - Server encountered an unexpected error.
-   501: Not Implemented - The server does not support the functionality required to fulfill the request.
-   503: Service Unavailable - The server is temporarily unavailable (maintenance or overload).
