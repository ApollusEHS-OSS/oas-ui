const oas = {
  "openapi": "3.0.1",
  "info": {
    "title": "testName",
    "description": "testDescription",
    "contact": {
      "name": "testContactName",
      "url": "http://www.test.com",
      "email": "testContactEmail@email.com"
    },
    "license": {
      "name": "testLicenseName",
      "url": "testLicenseUrl"
    },
    "version": "testVersion"
  },
  "paths": {
    "/applications": {
      "post": {
        "tags": [
          "application-resource"
        ],
        "operationId": "createApplicationUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Reference",
            "in": "header",
            "required": true,
            "schema": {
              "pattern": "[\\s\\S]+\\/[0-9]+",
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Name",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Identifier",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateApplicationRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateApplicationResponse"
                }
              }
            }
          }
        }
      }
    },
    "/assets": {
      "get": {
        "tags": [
          "assets-resource"
        ],
        "operationId": "getAssetsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": true,
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LoanLifeCycleType"
              }
            }
          },
          {
            "name": "filter",
            "in": "query",
            "description": "Filters: [zipCode: STRING (required) , houseNumberSuffix: STRING, houseNumber: STRING (required) ]",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAssetsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/calculations/apr": {
      "post": {
        "tags": [
          "calculations-resource"
        ],
        "operationId": "calculateAprUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "costsMode",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/CostsMode"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Reference",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Name",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Identifier",
            "in": "header",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CalculateAprRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalculateAprResponse"
                }
              }
            }
          }
        }
      }
    },
    "/calculations/loanDuration": {
      "post": {
        "tags": [
          "calculations-resource"
        ],
        "operationId": "calculateLoanDurationUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CalculateLoanDurationRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalculateLoanDurationResponse"
                }
              }
            }
          }
        }
      }
    },
    "/calculations/maxLoan": {
      "post": {
        "tags": [
          "calculations-resource"
        ],
        "operationId": "calculateMaxLoanUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CalculateMaxLoanRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalculateMaxLoanResponse"
                }
              }
            }
          }
        }
      }
    },
    "/calculations/paymentTerms": {
      "post": {
        "tags": [
          "calculations-resource"
        ],
        "operationId": "calculatePaymentTermsUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CalculatePaymentTermsRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CalculatePaymentTermsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers": {
      "get": {
        "tags": [
          "dossiers-resource"
        ],
        "operationId": "DossiersResourcegetDossiersUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "filter",
            "in": "query",
            "description": "Filters: [phase: STRING, uid: STRING, number: STRING, intermediaryName: STRING, intermediaryNumber: STRING, sourceSystemReference: STRING, handling: STRING, applicantName: STRING, labelName: STRING, labelCode: STRING, partyExternalReference: STRING, status: STRING]",
            "required": false,
            "schema": {
              "type": "string",
              "description": "For BO there is only partyExternalReference filter available. For ML-MO and CL-MO rest of filters are available except partyExternalReference. Some fields support multiple values like 'phase' field (see example).",
              "deprecated": false
            },
            "examples": {
              "CL - ORIGINATION": {
                "value": "labelCode eq 'CODE' and (phase eq 'Document assessment' or phase eq 'Final assessment')"
              },
              "ML - SERVICING": {
                "value": "partyExternalReference eq 'pty-ref-1'"
              },
              "ML - ORIGINATION": {
                "value": "labelCode eq 'CODE' and (phase eq 'Document assessment' or phase eq 'Final assessment')"
              }
            }
          },
          {
            "name": "page",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "size",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchDossiersResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}": {
      "get": {
        "tags": [
          "dossiers-resource"
        ],
        "operationId": "DossiersResourcegetDossierUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Dossier"
                }
              }
            }
          }
        }
      },
      "options": {
        "tags": [
          "dossiers-resource"
        ],
        "operationId": "DossiersResourcegetDossierOptionsUsingOPTIONS",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DossierOptions"
                }
              }
            }
          }
        }
      },
      "head": {
        "tags": [
          "dossiers-resource"
        ],
        "operationId": "DossiersResourceisDossierPresentUsingHEAD",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "patch": {
        "tags": [
          "dossiers-resource"
        ],
        "operationId": "DossiersResourceupdateDossierUsingPATCH",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "If-Match",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Reference",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Name",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-SrcSys-Identifier",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Event-Name",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Event-Detail",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/JsonPatch"
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "202": {
            "description": "Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AsyncUpdateMessage"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/assets": {
      "get": {
        "tags": [
          "dossier-assets-resource"
        ],
        "operationId": "DossierAssetsResourcegetAssetsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAssetsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/assets/{assetId}": {
      "get": {
        "tags": [
          "dossier-assets-resource"
        ],
        "operationId": "DossierAssetsResourcegetAssetUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "assetId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Asset"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/constructionFunds/{fundReference}/transactions": {
      "get": {
        "tags": [
          "transactions-resource"
        ],
        "operationId": "TransactionsResourcegetConstructionFundTransactionsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "fundReference",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Transactions"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/consumerLoans": {
      "get": {
        "tags": [
          "contracts-resource"
        ],
        "operationId": "ContractsResourcegetConsumerLoansUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetConsumerLoansResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/consumerLoans/{consumerLoanId}": {
      "get": {
        "tags": [
          "contracts-resource"
        ],
        "operationId": "ContractsResourcegetConsumerLoanUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "consumerLoanId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConsumerLoan"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/contractors": {
      "get": {
        "tags": [
          "parties-resource"
        ],
        "operationId": "PartiesResourcegetContractorsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetContractorsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/contractors/{contractorId}": {
      "get": {
        "tags": [
          "parties-resource"
        ],
        "operationId": "PartiesResourcegetContractorUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "contractorId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contractor"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "parties-resource"
        ],
        "operationId": "PartiesResourceupdateContractorUsingPATCH",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "contractorId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "If-Match",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Contractor"
              }
            }
          },
          "required": true
        },
        "responses": {
          "202": {
            "description": "Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AsyncPartialRequestMessage"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/contracts": {
      "get": {
        "tags": [
          "contracts-resource"
        ],
        "operationId": "ContractsResourcegetContractsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetContractsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/contracts/{contractId}": {
      "get": {
        "tags": [
          "contracts-resource"
        ],
        "operationId": "ContractsResourcegetContractUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "contractId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contract"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/dueDateFunds/{fundReference}/transactions": {
      "get": {
        "tags": [
          "transactions-resource"
        ],
        "operationId": "TransactionsResourcegetDueDateFundTransactionsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "fundReference",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Transactions"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/funders": {
      "get": {
        "tags": [
          "funders-resource"
        ],
        "operationId": "FundersResourcegetFundersUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetFundersResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "funders-resource"
        ],
        "operationId": "FundersResourcecreateFunderUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Funder"
              }
            }
          },
          "required": true
        },
        "responses": {
          "202": {
            "description": "Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AsyncPartialRequestMessage"
                }
              }
            }
          }
        }
      },
      "options": {
        "tags": [
          "funders-resource"
        ],
        "operationId": "FundersResourcegetOverallOptionsUsingOPTIONS",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/funders/{funderId}": {
      "get": {
        "tags": [
          "funders-resource"
        ],
        "operationId": "FundersResourcegetFunderUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "funderId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Funder"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "funders-resource"
        ],
        "operationId": "FundersResourcecreateOrReplaceFunderUsingPUT",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "funderId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "If-Match",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Funder"
              }
            }
          },
          "required": true
        },
        "responses": {
          "202": {
            "description": "Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AsyncPartialRequestMessage"
                }
              }
            }
          }
        }
      },
      "head": {
        "tags": [
          "funders-resource"
        ],
        "operationId": "FundersResourceisFunderPresentUsingHEAD",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "funderId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "patch": {
        "tags": [
          "funders-resource"
        ],
        "operationId": "FundersResourceupdateFunderUsingPATCH",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "funderId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "If-Match",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Funder"
              }
            }
          },
          "required": true
        },
        "responses": {
          "202": {
            "description": "Accepted",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AsyncPartialRequestMessage"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/funds/declarations": {
      "get": {
        "tags": [
          "funds-resource"
        ],
        "operationId": "getDeclarationsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetDeclarationsResult"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "funds-resource"
        ],
        "operationId": "createDeclarationUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Declaration"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Declaration"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/funds/declarations/{entityId}": {
      "get": {
        "tags": [
          "funds-resource"
        ],
        "operationId": "getDeclarationUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "entityId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Declaration"
                }
              }
            }
          }
        }
      },
      "put": {
        "tags": [
          "funds-resource"
        ],
        "operationId": "updateDeclarationUsingPUT",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "entityId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Declaration"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Declaration"
                }
              }
            }
          },
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Declaration"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/funds/depot/extend": {
      "post": {
        "tags": [
          "funds-resource"
        ],
        "operationId": "extendDepotUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/legalPersons": {
      "get": {
        "tags": [
          "parties-resource"
        ],
        "operationId": "PartiesResourcegetLegalPersonsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetLegalPersonsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/legalPersons/{legalPersonId}": {
      "get": {
        "tags": [
          "parties-resource"
        ],
        "operationId": "PartiesResourcegetLegalPersonUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "legalPersonId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LegalPerson"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/loanParts/{loanPartReference}/simulations/interestRateRevision": {
      "get": {
        "tags": [
          "simulations-resource"
        ],
        "operationId": "interestRateRevisionUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "loanPartReference",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InterestRateRevisionResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/loanParts/{loanPartReference}/simulations/prepayment": {
      "get": {
        "tags": [
          "simulations-resource"
        ],
        "operationId": "getPrepaymentUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "loanPartReference",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "amortizationRecalculationType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/AmortizationRecalculationType"
            }
          },
          {
            "name": "direction",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/PrepaymentDirection"
            }
          },
          {
            "name": "prepaymentDate",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "name": "prepaymentAmount",
            "in": "query",
            "required": true,
            "schema": {
              "minimum": 0,
              "type": "number",
              "format": "double"
            }
          },
          {
            "name": "reason",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PrepaymentSimulation"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/loanParts/{loanPartReference}/transactions": {
      "get": {
        "tags": [
          "transactions-resource"
        ],
        "operationId": "TransactionsResourcegetLoanPartTransactionsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "loanPartReference",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Transactions"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/metadata": {
      "get": {
        "tags": [
          "dossiers-resource"
        ],
        "operationId": "DossiersResourcegetDossierMetadataUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetDossierMetadataResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/mortgageLoans": {
      "get": {
        "tags": [
          "contracts-resource"
        ],
        "operationId": "ContractsResourcegetMortgageLoansUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetMortgageLoansResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/mortgageLoans/{mortgageLoanId}": {
      "get": {
        "tags": [
          "contracts-resource"
        ],
        "operationId": "ContractsResourcegetMortgageLoanUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "mortgageLoanId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MortgageLoan"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/mortgageRegistrations": {
      "get": {
        "tags": [
          "contracts-resource"
        ],
        "operationId": "ContractsResourcegetMortgageRegistrationsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetMortgageRegistrationsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/mutations": {
      "get": {
        "tags": [
          "mutations-resource"
        ],
        "operationId": "getDossierMutationsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "loanpartSeqNo",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DossierMutation"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/notaries": {
      "get": {
        "tags": [
          "notaries-resource"
        ],
        "operationId": "NotariesResourcegetNotariesUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetNotariesResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/notaries/{notaryId}": {
      "get": {
        "tags": [
          "notaries-resource"
        ],
        "operationId": "NotariesResourcegetNotaryUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "notaryId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Notary"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/parties": {
      "get": {
        "tags": [
          "parties-resource"
        ],
        "operationId": "PartiesResourcegetPartiesUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetPartiesResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/prepaymentMutations": {
      "post": {
        "tags": [
          "mutations-resource"
        ],
        "operationId": "createPrepaymentMutationUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PrepaymentMutation"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PrepaymentMutationResult"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/relatedContracts": {
      "get": {
        "tags": [
          "related-contracts-resource"
        ],
        "operationId": "RelatedContractsResourcegetRelatedContractsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetRelatedContractsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/relatedContracts/{relatedContractId}": {
      "get": {
        "tags": [
          "related-contracts-resource"
        ],
        "operationId": "RelatedContractsResourcegetRelatedContractUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "relatedContractId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RelatedContract"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/relatedDocuments": {
      "get": {
        "tags": [
          "related-documents-resource"
        ],
        "operationId": "RelatedDocumentsResourcegetRelatedDocumentsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "documentType",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetRelatedDocumentsResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "related-documents-resource"
        ],
        "operationId": "RelatedDocumentsResourceaddRelatedDocumentsUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-CorrelationId",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string",
              "description": "If loanLifeCycle is empty, then relatedDocument will be uploaded to midoffice.",
              "deprecated": false
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "batchId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "initBatch",
            "in": "query",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "commitBatch",
            "in": "query",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "documentName",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "documentCategory",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "documentType",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "originalDocumentType",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "source",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "contentLanguage",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "categoryVersion",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "entityRef",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "entityRefType",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddRelatedDocumentsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/relatedDocuments/batch": {
      "post": {
        "tags": [
          "related-documents-resource"
        ],
        "operationId": "RelatedDocumentsResourcecreateBatchUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddRelatedDocumentsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/relatedDocuments/batch/{batchId}": {
      "patch": {
        "tags": [
          "related-documents-resource"
        ],
        "operationId": "RelatedDocumentsResourceupdateBatchUsingPATCH",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-CorrelationId",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "batchId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "commitBatch",
            "in": "query",
            "required": true,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddRelatedDocumentsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/relatedDocuments/{documentId}": {
      "get": {
        "tags": [
          "related-documents-resource"
        ],
        "operationId": "RelatedDocumentsResourcedownloadRelatedDocumentUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string",
              "description": "When loanLifeCycle = SERVICING is filled in then relatedDocuments for BO are retrieved",
              "deprecated": false
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "documentId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/relatedLoans": {
      "get": {
        "tags": [
          "related-contracts-resource"
        ],
        "operationId": "RelatedContractsResourcegetRelatedLoansUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "301": {
            "description": "Moved Permanently",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetRelatedLoansResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/relatedLoans/{relatedLoanId}": {
      "get": {
        "tags": [
          "related-contracts-resource"
        ],
        "operationId": "RelatedContractsResourcegetRelatedLoanUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "relatedLoanId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "301": {
            "description": "Moved Permanently",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RelatedLoan"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/stipulations": {
      "get": {
        "tags": [
          "stipulations-resource"
        ],
        "operationId": "StipulationsResourcegetStipulationsUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetStipulationsResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/stipulations/{stipulationId}": {
      "get": {
        "tags": [
          "stipulations-resource"
        ],
        "operationId": "StipulationsResourcegetStipulationUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "stipulationId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Stipulation"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/stipulations/{stipulationId}/assembly/pages": {
      "post": {
        "tags": [
          "stipulations-resource"
        ],
        "operationId": "StipulationsResourceaddTempDocumentAssemblyUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "stipulationId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DocumentTempAssemblyResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/stipulations/{stipulationId}/assembly/pages/{tempAssemblyId}": {
      "post": {
        "tags": [
          "stipulations-resource"
        ],
        "operationId": "StipulationsResourceaddPageSetToTempAssemblyUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "stipulationId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "tempAssemblyId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "assemble",
            "in": "query",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Successfully added temp assembly to analysis",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DocumentTempAssemblyResponse"
                }
              }
            }
          },
          "202": {
            "description": "Successfully added new page set",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DocumentTempAssemblyResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/stipulations/{stipulationId}/assembly/pages/{tempAssemblyId}/assemble": {
      "post": {
        "tags": [
          "stipulations-resource"
        ],
        "operationId": "StipulationsResourceaddAnalyzeAssemblyUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "stipulationId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "tempAssemblyId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DocumentTempAssemblyResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/stipulations/{stipulationId}/document": {
      "get": {
        "tags": [
          "stipulations-resource"
        ],
        "operationId": "StipulationsResourcedownloadStipulationDocumentUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "stipulationId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "documentRef",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "tags": [
          "stipulations-resource"
        ],
        "operationId": "StipulationsResourceuploadDocumentForStipulationUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "stipulationId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UploadStipulationDocumentResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/subsidies": {
      "get": {
        "tags": [
          "subsidies-resource"
        ],
        "operationId": "SubsidiesResourcegetSubsidiesUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetSubsidiesResponse"
                }
              }
            }
          }
        }
      }
    },
    "/dossiers/{dossierNumber}/subsidies/{subsidy}": {
      "get": {
        "tags": [
          "subsidies-resource"
        ],
        "operationId": "SubsidiesResourcegetSubsidiesUsingGET",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "dossierNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "expand",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "subsidy",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetSubsidiesResponse"
                }
              }
            }
          }
        }
      }
    },
    "/messages": {
      "post": {
        "tags": [
          "messages-resource"
        ],
        "operationId": "addMessageUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "messageSource",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/MessageSourceType"
            }
          },
          {
            "name": "messageType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/MessageType"
            }
          },
          {
            "name": "intermediaryNr",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateMessageResponse"
                }
              }
            }
          }
        }
      }
    },
    "/relations/contractors": {
      "put": {
        "tags": [
          "relations-resource"
        ],
        "operationId": "createOrReplaceContractorUsingPUT",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "dossierNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "existingDossierNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Contractor"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Contractor"
                }
              }
            }
          }
        }
      }
    },
    "/relations/parties": {
      "post": {
        "tags": [
          "relations-resource"
        ],
        "operationId": "createPartyUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "dossierNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "existingDossierNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Party"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Party"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "relations-resource"
        ],
        "operationId": "updatePartyUsingPATCH",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productFamilyType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/ProductFamilyType"
            }
          },
          {
            "name": "loanLifeCycle",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          {
            "name": "dossierNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "existingDossierNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Party"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Party"
                }
              }
            }
          }
        }
      }
    },
    "/relations/search": {
      "post": {
        "tags": [
          "relations-resource"
        ],
        "operationId": "searchPartiesUsingPOST",
        "parameters": [
          {
            "name": "Content-Type",
            "in": "header",
            "description": "Content-Type of request data. In this case should be application/json",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "User-Agent",
            "in": "header",
            "description": "Request user agent",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Account-Name",
            "in": "header",
            "description": "Account name of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-Inet-Address",
            "in": "header",
            "description": "Inet address of caller service",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Davinci-DossierNr",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SearchPartiesRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchPartiesResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AccountingStatus": {
        "type": "string",
        "enum": [
          "NORMAL",
          "WRITTEN_OFF_IN_GENERAL_LEDGER",
          "COLLECTIONS"
        ]
      },
      "AcquisitionType": {
        "type": "string",
        "enum": [
          "AUCTION",
          "OTHER"
        ]
      },
      "AddRelatedDocumentResponse": {
        "type": "object",
        "properties": {
          "fileName": {
            "type": "string"
          },
          "uploadStatus": {
            "$ref": "#/components/schemas/DocumentUploadStatus"
          },
          "relatedDocument": {
            "$ref": "#/components/schemas/RelatedDocument"
          }
        }
      },
      "AddRelatedDocumentsResponse": {
        "type": "object",
        "properties": {
          "documents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RelatedDocument"
            }
          },
          "batchId": {
            "type": "string"
          }
        }
      },
      "AddRelatedDocumentsWrappingResponse": {
        "type": "object",
        "properties": {
          "relatedDocumentResponses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AddRelatedDocumentResponse"
            }
          }
        }
      },
      "AdditionalLoanCalculationResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object",
            "properties": {
              "maximumLoanRelativeToObjectCosts": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "requiredAdditionalLoan": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "maximumAdditionalLoan": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "absoluteMaximumLoan": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "capitalAssetsToUse": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "objectCosts": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              }
            }
          }
        ]
      },
      "AdditionalLoanPaymentCapacityResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object",
            "properties": {
              "maxLTILayerNumber": {
                "type": "integer",
                "format": "int32"
              },
              "assessmentPeriodStartDate": {
                "type": "string",
                "format": "date"
              },
              "futureFullPayment": {
                "$ref": "#/components/schemas/FutureFullPayment"
              },
              "assessmentPeriodEndDate": {
                "type": "string",
                "format": "date"
              },
              "assessmentPeriodStart": {
                "type": "integer",
                "format": "int32"
              },
              "keyInterest": {
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              },
              "futureRemainingPrincipal": {
                "$ref": "#/components/schemas/FutureRemainingPrincipal"
              },
              "leewayAvailable": {
                "$ref": "#/components/schemas/LeewayAvailable"
              },
              "assessmentPeriodEnd": {
                "type": "integer",
                "format": "int32"
              },
              "financialLeeway": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "paymentCapacity": {
                "$ref": "#/components/schemas/PaymentCapacity"
              },
              "fullPayment": {
                "$ref": "#/components/schemas/FullPayment"
              },
              "interestOnlyPayment": {
                "$ref": "#/components/schemas/InterestOnlyPayment"
              }
            }
          }
        ]
      },
      "AdditionalRealEstate": {
        "description": "Expansion wildcards=[asset*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Asset"
          },
          {
            "required": [
              "additionalRealEstateType",
              "address"
            ],
            "type": "object",
            "properties": {
              "sold": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "additionalRealEstateType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/AdditionalRealEstateType"
              },
              "address": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/Address"
              }
            }
          }
        ]
      },
      "AdditionalRealEstateType": {
        "type": "string",
        "enum": [
          "TO_SELL",
          "ALREADY_OWNED",
          "PORTFOLIO"
        ]
      },
      "Address": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ContactDetail"
          },
          {
            "required": [
              "countryCode"
            ],
            "type": "object",
            "properties": {
              "zipCode": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "postOfficeBox": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "houseNumberSuffix": {
                "maxLength": 50,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "city": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "addressType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
                "$ref": "#/components/schemas/AddressType"
              },
              "street": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "countryCode": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
                "$ref": "#/components/schemas/CountryCode"
              },
              "houseNumber": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              }
            }
          }
        ]
      },
      "AddressType": {
        "type": "string",
        "enum": [
          "CORRESPONDENCE",
          "RESIDENCE",
          "BUSINESS"
        ]
      },
      "AdviceType": {
        "type": "string",
        "enum": [
          "EXECUTION_ONLY",
          "ADVICE",
          "MEDIATION",
          "ADVICE_AND_MEDIATION"
        ]
      },
      "Amortization": {
        "required": [
          "amount",
          "type"
        ],
        "type": "object",
        "properties": {
          "amount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "amortizationTerms": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AmortizationTerm"
            }
          },
          "type": {
            "type": "string"
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "amortizationVersionRedemption": "AmortizationVersionRedemption",
            "calculationPaymentTermsRedemption": "CalculationPaymentTermsRedemption",
            "loanDurationRedemption": "LoanDurationRedemption",
            "prepaymentSimulationRedemption": "PrepaymentSimulationRedemption"
          }
        }
      },
      "AmortizationRecalculationType": {
        "type": "string",
        "enum": [
          "FIXED_AMOUNT",
          "FIXED_DURATION"
        ]
      },
      "AmortizationSchedule": {
        "type": "string",
        "enum": [
          "STANDARD_PRECOMPUTED",
          "STANDARD_INTEREST_ONLY",
          "STANDARD_LINEAR",
          "VLK",
          "INTEREST_ONLY_WITHOUT_ENDDATE",
          "STANDARD_PRECOMPUTED_WITH_PROVIDED_AMOUNT",
          "STANDARD_LINEAR_WITH_PROVIDED_AMOUNT"
        ]
      },
      "AmortizationTerm": {
        "type": "object",
        "properties": {
          "redemptionAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "interestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "term": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "AmortizationVersion": {
        "required": [
          "amortization",
          "amortizationSchedule",
          "baseTariffSelectionDate",
          "closingDate",
          "commercialName",
          "dueAmountRepaymentHandling",
          "dueDateCalendarDay",
          "durationInMonths",
          "durationInPeriods",
          "economicalOwner",
          "firstDueDate",
          "gracePeriod",
          "judicialOwner",
          "loanPurpose",
          "periodicity",
          "productName",
          "rateAdaptationList",
          "rateRevisionChoice",
          "rateSelectionDate",
          "rateSelectionDateOverride",
          "reference",
          "revisionEndDate",
          "revisionPeriod",
          "revisionStartDate",
          "startPlanDate",
          "theoreticalEndDate"
        ],
        "type": "object",
        "properties": {
          "gracePeriod": {
            "type": "integer",
            "format": "int32"
          },
          "judicialOwner": {
            "type": "integer",
            "format": "int32"
          },
          "rateSelectionDateOverride": {
            "type": "string",
            "format": "date"
          },
          "theoreticalEndDate": {
            "type": "string",
            "format": "date"
          },
          "financeIncrease": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "delta": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "amortizationSchedule": {
            "$ref": "#/components/schemas/AmortizationSchedule"
          },
          "providedAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "amortization": {
            "$ref": "#/components/schemas/AmortizationVersionRedemption"
          },
          "isActive": {
            "type": "boolean"
          },
          "netRate": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "nominalYearlyInterestRate": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "productName": {
            "type": "string"
          },
          "reference": {
            "type": "string"
          },
          "sequenceNr": {
            "type": "integer",
            "format": "int32"
          },
          "startPlanDate": {
            "type": "string",
            "format": "date"
          },
          "rateRevisionChoice": {
            "$ref": "#/components/schemas/RateRevisionChoice"
          },
          "relatedProductPremium": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "loanPurpose": {
            "type": "string"
          },
          "economicalOwner": {
            "type": "integer",
            "format": "int32"
          },
          "grossRate": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "commercialName": {
            "type": "string"
          },
          "amount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "durationInMonths": {
            "type": "integer",
            "format": "int32"
          },
          "dueAmountRepaymentHandling": {
            "$ref": "#/components/schemas/DueAmountRepaymentHandling"
          },
          "dueDateCalendarDay": {
            "type": "integer",
            "format": "int32"
          },
          "revisionStartDate": {
            "type": "string",
            "format": "date"
          },
          "proRataInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "relatedProductPremiumPercentage": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "marketRate": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "outdatedReason": {
            "type": "string"
          },
          "revisionEndDate": {
            "type": "string",
            "format": "date"
          },
          "closingDate": {
            "type": "string",
            "format": "date"
          },
          "ltv": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "rateAdaptationList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RateAdaptation"
            }
          },
          "revisionPeriod": {
            "$ref": "#/components/schemas/RevisionPeriod"
          },
          "realPeriodicInterestRate": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "baseTariffSelectionDate": {
            "type": "string",
            "format": "date"
          },
          "realYearlyInterestRate": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "revisionPeriodStatus": {
            "$ref": "#/components/schemas/RevisionPeriodStatus"
          },
          "periodicity": {
            "$ref": "#/components/schemas/Periodicity"
          },
          "rateSelectionDate": {
            "type": "string",
            "format": "date"
          },
          "durationInPeriods": {
            "type": "integer",
            "format": "int32"
          },
          "firstDueDate": {
            "type": "string",
            "format": "date"
          },
          "activationDate": {
            "type": "string",
            "format": "date"
          },
          "relatedProductNumber": {
            "type": "string"
          },
          "isSimulation": {
            "type": "boolean"
          }
        }
      },
      "AmortizationVersionRedemption": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Amortization"
          },
          {
            "type": "object",
            "properties": {
              "terms": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AmortizationVersionRedemptionTerm"
                }
              }
            }
          }
        ]
      },
      "AmortizationVersionRedemptionTerm": {
        "type": "object",
        "properties": {
          "interestDetail": {
            "type": "boolean"
          },
          "redemptionAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "remainingPrincipal": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "interestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "term": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "AmortizationVersionToBeActivatedMutationDetail": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MutationDetail"
          },
          {
            "required": [
              "amortizationVersion",
              "creditProviderCostAmount",
              "creditTheoreticalEndDate",
              "customerCostAmount",
              "externalReference",
              "intermediaryCostAmount",
              "mutationTypes",
              "originalCreditExternalReference",
              "paybackPeriodForPenaltyInMonths"
            ],
            "type": "object",
            "properties": {
              "externalReference": {
                "type": "string"
              },
              "amortizationVersion": {
                "$ref": "#/components/schemas/AmortizationVersion"
              },
              "originalCreditExternalReference": {
                "type": "string"
              },
              "creditProviderCostAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "intermediaryCostAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "creditTheoreticalEndDate": {
                "type": "string",
                "format": "date"
              },
              "paybackPeriodForPenaltyInMonths": {
                "type": "integer",
                "format": "int32"
              },
              "customerCostAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "mutationTypes": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/MutationType"
                }
              }
            }
          }
        ]
      },
      "Amount": {
        "type": "object",
        "properties": {
          "gross": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "net": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "ApplicantCalculationResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object",
            "properties": {
              "incomes": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/IncomeCalculationResult"
                }
              },
              "totalExpenseAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "totalIncomeAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "expenses": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ExpenseCalculationResult"
                }
              }
            }
          }
        ]
      },
      "Application": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "proposal": {
            "$ref": "#/components/schemas/Proposal"
          },
          "requestType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/RequestType"
          },
          "entityId": {
            "type": "string"
          },
          "validationDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "transferDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "nhg": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "transfer": {
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [transfer].",
            "$ref": "#/components/schemas/Transfer"
          },
          "rejectionReasons": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "adviceType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/AdviceType"
          }
        }
      },
      "ApplicationSummary": {
        "type": "object",
        "properties": {
          "proposal": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/ProposalSummary"
          },
          "applicationType": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "sourceSystem": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "loans": {
            "type": "array",
            "description": "Expandable using [loansSummary].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "consumerLoanSummary": "ConsumerLoanSummary",
                  "mortgageLoanSummary": "MortgageLoanSummary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/MortgageLoanSummary"
                },
                {
                  "$ref": "#/components/schemas/ConsumerLoanSummary"
                }
              ]
            }
          },
          "entityId": {
            "type": "string"
          },
          "label": {
            "$ref": "#/components/schemas/LabelCode"
          },
          "validationDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "transferDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "nhg": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "customerType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/CustomerType"
          },
          "parties": {
            "type": "array",
            "description": "Expandable using [partiesSummary].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "contractorSummary": "ContractorSummary",
                  "intermediarySummary": "IntermediarySummary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/IntermediarySummary"
                },
                {
                  "$ref": "#/components/schemas/ContractorSummary"
                }
              ]
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "asset": {
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [assetSummary].",
            "$ref": "#/components/schemas/AssetSummary"
          },
          "applicationDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "Assessment": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date-time"
          },
          "result": {
            "$ref": "#/components/schemas/AssessmentResultType"
          },
          "assessmentType": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN]."
          },
          "name": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "rules": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Rule"
            }
          },
          "documentRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "dossierPhase": {
            "type": "string"
          },
          "validationDate": {
            "type": "string",
            "format": "date-time"
          },
          "type": {
            "type": "string"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[documentRef, assessmentType, date, name, dossierPhase, validationDate, result, rules]. Required fields for products=[CONSUMER_LOAN] are=[date, assessmentType, dossierPhase, validationDate, result, rules].",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "manualAssessment": "ManualAssessment",
            "automaticAssessment": "AutomaticAssessment"
          }
        }
      },
      "AssessmentResultType": {
        "type": "string",
        "enum": [
          "APPROVED",
          "ERROR",
          "REJECTED",
          "CANCELLED",
          "UNDECIDED"
        ]
      },
      "Asset": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "assetValues": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [assetValues].",
            "items": {
              "$ref": "#/components/schemas/AssetValue"
            }
          },
          "acquisitionType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/AcquisitionType"
          },
          "assetValuations": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]. Expandable using [assetValuations].",
            "items": {
              "$ref": "#/components/schemas/AssetValuation"
            }
          },
          "entityId": {
            "type": "string"
          },
          "units": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [units].",
            "items": {
              "$ref": "#/components/schemas/Unit"
            }
          },
          "purchasePrice": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "rent": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]. Expandable using [rent].",
            "$ref": "#/components/schemas/Rent"
          },
          "type": {
            "type": "string"
          },
          "externalReference": {
            "type": "string"
          },
          "environment": {
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [environment].",
            "$ref": "#/components/schemas/Environment"
          },
          "partition": {
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [partition].",
            "$ref": "#/components/schemas/Partition"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "realEstateScenario": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV].",
            "$ref": "#/components/schemas/RealEstateScenario"
          },
          "rentalContracts": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [rentalContracts].",
            "items": {
              "$ref": "#/components/schemas/RentalContract"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relations": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          },
          "energyClass": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[ADDITIONAL_LOAN].",
            "$ref": "#/components/schemas/AssetEnergyClass"
          }
        },
        "description": "Expansion wildcards=[asset*]",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "realEstateSubUnit": "RealEstateSubUnit",
            "additionalRealEstate": "AdditionalRealEstate",
            "realEstate": "RealEstate"
          }
        }
      },
      "AssetCalculationResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object",
            "properties": {
              "marketValue": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "shareOfEnergySavingsValueIncrease": {
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              }
            }
          }
        ]
      },
      "AssetEnergyClass": {
        "type": "string",
        "enum": [
          "ENERGY_NEUTRAL",
          "A_4PLUS",
          "A_3PLUS",
          "A_2PLUS",
          "A_PLUS",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "NUL_OP_DE_METER"
        ]
      },
      "AssetOwnership": {
        "type": "object",
        "properties": {
          "ownershipType": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "percentage": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "AssetSummary": {
        "type": "object",
        "properties": {
          "projectLocation": {
            "$ref": "#/components/schemas/ProjectLocation"
          },
          "address": {
            "$ref": "#/components/schemas/Address"
          },
          "marketValue": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "AssetUsage": {
        "required": [
          "purposeType",
          "userType"
        ],
        "type": "object",
        "properties": {
          "endDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "userType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/UserType"
          },
          "purposeType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/PurposeType"
          },
          "startDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          }
        }
      },
      "AssetValuation": {
        "required": [
          "assetValuationType",
          "value"
        ],
        "type": "object",
        "properties": {
          "assetValuationType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV].",
            "$ref": "#/components/schemas/AssetValuationType"
          },
          "source": {
            "type": "string"
          },
          "value": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "AssetValuationType": {
        "type": "string",
        "enum": [
          "APPRAISAL_VALUE",
          "ASKING_PRICE",
          "POSTALCODE_VALUE",
          "STREET_VALUE",
          "CHARACTERISTICS_VALUE",
          "PREVIOUS_SALES_VALUE",
          "PREVIOUS_MORTGAGE_VALUE",
          "NBWO_WEIGHTED_VALUE",
          "WOZ_VALUE",
          "EXECUTION_VALUE",
          "DEALER_VALUE",
          "SHOW_ROOM_VALUE",
          "LISTING_VALUE",
          "TRADEIN_VALUE",
          "PURCHASE_PRICE",
          "PURCHASE_PRICE_LAND",
          "MODEL_VALUE"
        ]
      },
      "AssetValue": {
        "required": [
          "assetValueType",
          "value"
        ],
        "type": "object",
        "properties": {
          "isReferenceValue": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "assetValueType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/AssetValueType"
          },
          "valueDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "value": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "AssetValueType": {
        "type": "string",
        "enum": [
          "APPLICATION_MESSAGE_STATED",
          "PURCHASE_PRICE",
          "APPRAISAL",
          "WOZ",
          "AFTER_RENOVATION",
          "AFTER_RENOVATION_EXCLUDING_ENERGY_SAVINGS",
          "CALCULATED_REAL_ESTATE_VALUE",
          "ACTUAL_MARKET_VALUE",
          "AFTER_TRANSFORMATION_MARKET_VALUE",
          "CALC_AS_A_VALUE",
          "EXCESS_VALUE",
          "FORECLOSURE_VALUE",
          "FULL_VALIDATION_ESTIMATION_VALUE",
          "INDICATIVE_ESTIMATION_VALUE",
          "MAXIMUM_FINANCING_VALUE",
          "MINIMUM_FINANCING_VALUE",
          "PURCHASE_PRICE_PLUS_SALES_QUOTE",
          "RECONSTRUCTION_VALUE",
          "REFERENCE_VALUE",
          "RENTAL_VALUE",
          "SALES_QUOTE",
          "SALES_QUOTE_PLUS_BUILDING_PLOT",
          "SHORT_INSPECTION_ESTIMATION_VALUE",
          "VOLUNTARY_PUBLIC_SALE_VALUE",
          "OTHER",
          "MARKET_VALUE_RENTED",
          "MARKET_VALUE_EMPTY",
          "MARKET_VALUE_RENTED_AFTER_RENOVATION",
          "MARKET_VALUE_EMPTY_AFTER_RENOVATION",
          "OPINION_VALUE",
          "MARKET_RENT"
        ]
      },
      "AssetsRequest": {
        "required": [
          "houseNumber",
          "zipCode"
        ],
        "type": "object",
        "properties": {
          "zipCode": {
            "type": "string"
          },
          "houseNumberSuffix": {
            "type": "string"
          },
          "houseNumber": {
            "type": "string"
          }
        }
      },
      "AsyncPartialRequestMessage": {
        "type": "object",
        "properties": {
          "traceId": {
            "type": "string"
          },
          "entityReference": {
            "type": "string"
          },
          "etag": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      },
      "AsyncUpdateMessage": {
        "type": "object",
        "properties": {
          "traceId": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      },
      "AutomaticAssessment": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[entryPoint]. Expansion wildcards=[assessment*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Assessment"
          },
          {
            "type": "object",
            "properties": {
              "rulesVersion": {
                "type": "string"
              },
              "entryPoint": {
                "type": "string"
              }
            }
          }
        ]
      },
      "Balance": {
        "type": "object",
        "properties": {
          "outstanding": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "bonus": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "entityId": {
            "type": "string"
          },
          "prepaymentPenaltyExemptionAmount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "toRecover": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "financed": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "initialInterest": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "externalReference": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "due": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "theoreticalBalance": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "creditLimit": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "interestOutstanding": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "judicialBalance": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          }
        }
      },
      "BankAccount": {
        "required": [
          "accountNumber"
        ],
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "ascription": {
            "maxLength": 100,
            "minLength": 1,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "accountNumber": {
            "maxLength": 50,
            "minLength": 1,
            "pattern": "[A-Z]{2}\\d{2}[A-Z0-9]{5,30}",
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          }
        }
      },
      "BaseCloseRequest": {
        "type": "object",
        "properties": {
          "productFamilyType": {
            "$ref": "#/components/schemas/ProductFamilyType"
          },
          "loanLifeCycle": {
            "$ref": "#/components/schemas/LoanLifeCycleType"
          }
        }
      },
      "BaseCost": {
        "required": [
          "amount",
          "type"
        ],
        "type": "object",
        "properties": {
          "duration": {
            "type": "integer",
            "format": "int32"
          },
          "amount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "durationInterval": {
            "$ref": "#/components/schemas/PeriodLength"
          },
          "active": {
            "type": "boolean"
          },
          "source": {
            "$ref": "#/components/schemas/CostSource"
          },
          "type": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "finance": {
            "type": "boolean"
          }
        }
      },
      "Binding": {
        "type": "object",
        "properties": {
          "lastAcceptDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "sentDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date-time"
          }
        }
      },
      "Blocked": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "reason": {
            "type": "string"
          },
          "amount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "BridgeLoan": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[sequenceNumber, loanPartType, variability]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY] are=[duration, termLength, effectiveDate]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[variability]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[PAYMENT_TERMS] are=[entityId, nominalYearlyInterestRate, duration, termLength, redemptionInterval, amortization, principal]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[APR] are=[sequenceNumber, redemptionInterval, nominalYearlyInterestRate].",
        "allOf": [
          {
            "$ref": "#/components/schemas/LoanPart"
          },
          {
            "type": "object"
          }
        ]
      },
      "CalculateAprRequest": {
        "required": [
          "date",
          "label",
          "mortgageLoan"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "mortgageLoan": {
            "$ref": "#/components/schemas/MortgageLoan"
          },
          "calculationTypes": {
            "type": "array",
            "description": "CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN].",
            "items": {
              "$ref": "#/components/schemas/CalculationType"
            }
          },
          "label": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[]."
      },
      "CalculateAprResponse": {
        "type": "object",
        "properties": {
          "product": {
            "$ref": "#/components/schemas/Product"
          },
          "loanParts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LoanPartApr"
            }
          },
          "appliedCosts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Cost"
            }
          }
        }
      },
      "CalculateInterestRateGroup": {
        "type": "object",
        "properties": {
          "durationFrom": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "riskProfile": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN]."
          },
          "amountTo": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "nominalAnnualRate": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as percentage.",
            "format": "double"
          },
          "durationTo": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "effectiveAnnualRate": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as percentage.",
            "format": "double"
          },
          "amountFrom": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "CalculateLoanDurationRequest": {
        "required": [
          "loanParts",
          "label"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION].",
            "format": "date"
          },
          "loanParts": {
            "maxItems": 2147483647,
            "minItems": 1,
            "type": "array",
            "description": "CalculationTypes=[LOAN_DURATION].",
            "items": {
              "$ref": "#/components/schemas/LoanPart"
            }
          },
          "label": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION]."
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LOAN_DURATION] are=[loanParts]."
      },
      "CalculateLoanDurationResponse": {
        "required": [
          "label"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION].",
            "format": "date"
          },
          "loanParts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OutputLoanPart"
            }
          },
          "label": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION]."
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[PAYMENT_TERMS, LOAN_DURATION] are=[date]."
      },
      "CalculateMaxLoanRequest": {
        "required": [
          "calculationPersons",
          "contractors",
          "date",
          "label"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "CalculationTypes=[MAX_LOAN, LTI, LTV, ADDITIONAL_LOAN].",
            "format": "date"
          },
          "calculationPersons": {
            "type": "array",
            "description": "CalculationTypes=[MAX_LOAN, LTI, LTV, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "items": {
              "$ref": "#/components/schemas/CalculationPerson"
            }
          },
          "mortgageLoan": {
            "description": "CalculationTypes=[LTI, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "$ref": "#/components/schemas/MortgageLoan"
          },
          "assessmentPeriodStartDate": {
            "type": "string",
            "description": "CalculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "format": "date"
          },
          "assessmentPeriodEndDate": {
            "type": "string",
            "description": "CalculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "format": "date"
          },
          "label": {
            "maxLength": 100,
            "minLength": 1,
            "type": "string",
            "description": "CalculationTypes=[MAX_LOAN, LTI, LTV, ADDITIONAL_LOAN]."
          },
          "contractors": {
            "maxItems": 2147483647,
            "minItems": 1,
            "type": "array",
            "description": "CalculationTypes=[MAX_LOAN, LTI, LTV, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "items": {
              "$ref": "#/components/schemas/CalculationContractor"
            }
          },
          "normCode": {
            "description": "CalculationTypes=[MAX_LOAN].",
            "$ref": "#/components/schemas/NormCode"
          },
          "freeFields": {
            "type": "array",
            "description": "CalculationTypes=[ADDITIONAL_LOAN].",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "calculationTypes": {
            "type": "array",
            "description": "CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN].",
            "items": {
              "$ref": "#/components/schemas/CalculationType"
            }
          },
          "household": {
            "description": "CalculationTypes=[MAX_LOAN].",
            "$ref": "#/components/schemas/Household"
          },
          "realEstate": {
            "description": "CalculationTypes=[LTI, LTV, ADDITIONAL_LOAN].",
            "$ref": "#/components/schemas/RealEstate"
          },
          "consumerLoan": {
            "description": "CalculationTypes=[MAX_LOAN].",
            "$ref": "#/components/schemas/ConsumerLoan"
          },
          "calculationOrganizations": {
            "type": "array",
            "description": "CalculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "items": {
              "$ref": "#/components/schemas/Organization"
            }
          },
          "relatedLoans": {
            "type": "array",
            "description": "CalculationTypes=[LTI].",
            "items": {
              "$ref": "#/components/schemas/RelatedLoan"
            }
          },
          "transaction": {
            "description": "CalculationTypes=[LTV].",
            "$ref": "#/components/schemas/CalculationTransaction"
          }
        },
        "description": "Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[normCode, consumerLoan, household]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[mortgageLoan, realEstate]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTV] are=[transaction]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[ADDITIONAL_LOAN] are=[realEstate, contractors]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY] are=[mortgageLoan, relatedLoans]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTV_SURPLUS] are=[contractors]."
      },
      "CalculateMaxLoanResponse": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "additionalLoansPaymentCapacity": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AdditionalLoanPaymentCapacityResult"
            }
          },
          "calculatedTotalValues": {
            "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN].",
            "$ref": "#/components/schemas/CalculatedTotalValues"
          },
          "applicants": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ApplicantCalculationResult"
            }
          },
          "households": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/HouseholdCalculationResult"
            }
          },
          "contracts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LoanCalculationResult"
            }
          },
          "maximumLoanAmountActualTermPayment": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "totalIncome": {
            "type": "number",
            "description": "Use calculatedTotalValues.incomeAmount Is formatted as currency.",
            "format": "double",
            "deprecated": true
          },
          "assets": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AssetCalculationResult"
            }
          },
          "normCode": {
            "$ref": "#/components/schemas/NormCode"
          },
          "maximumLoanAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "spendingCapacity": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "additionalLoans": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/AdditionalLoanCalculationResult"
            }
          },
          "calculationTypes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CalculationType"
            }
          },
          "normCalculations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/NormCalculationResult"
            }
          },
          "labelCode": {
            "type": "string"
          }
        }
      },
      "CalculatePaymentTermsRequest": {
        "required": [
          "label"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION].",
            "format": "date"
          },
          "termCount": {
            "minimum": 0,
            "type": "integer",
            "description": "CalculationTypes=[PAYMENT_TERMS].",
            "format": "int32"
          },
          "loanParts": {
            "type": "array",
            "description": "CalculationTypes=[PAYMENT_TERMS].",
            "items": {
              "$ref": "#/components/schemas/LoanPart"
            }
          },
          "label": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION]."
          }
        },
        "description": "Required fields for products=[CONSUMER_LOAN] calculationTypes=[PAYMENT_TERMS] are=[loanParts]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[PAYMENT_TERMS] are=[loanParts]."
      },
      "CalculatePaymentTermsResponse": {
        "required": [
          "label"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION].",
            "format": "date"
          },
          "loanParts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LoanPart"
            }
          },
          "label": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION]."
          },
          "loanPart": {
            "$ref": "#/components/schemas/LoanPart"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[PAYMENT_TERMS, LOAN_DURATION] are=[date]."
      },
      "CalculatedTotalValues": {
        "type": "object",
        "properties": {
          "incomeAmount": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "expensesAmount": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "existingLoanPaymentsAmount": {
            "type": "number",
            "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "Calculation": {
        "type": "object",
        "properties": {
          "loanToValueRatio": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as percentage.",
            "format": "double"
          },
          "relatedProductValue": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "calculationDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "loanAmount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "realEstateValue": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "CalculationCategory": {
        "type": "string",
        "enum": [
          "MORTGAGE_LOAN_CALC",
          "CONSUMER_LOAN_CALC"
        ]
      },
      "CalculationContractor": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[ADDITIONAL_LOAN] are=[fiscalResidence, capitalAssets].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Contractor"
          },
          {
            "type": "object",
            "properties": {
              "pensionDate": {
                "type": "string",
                "description": "CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "format": "date"
              }
            }
          }
        ]
      },
      "CalculationPaymentTermsRedemption": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Amortization"
          },
          {
            "required": [
              "interval",
              "redemptionType"
            ],
            "type": "object",
            "properties": {
              "gracePeriodInMonths": {
                "minimum": 0,
                "type": "integer",
                "format": "int32"
              },
              "redemptionType": {
                "$ref": "#/components/schemas/CalculationRedemptionType"
              },
              "terms": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CalculationRedemptionTerm"
                }
              },
              "interval": {
                "$ref": "#/components/schemas/CalculationRedemptionInterval"
              }
            }
          }
        ]
      },
      "CalculationPerson": {
        "allOf": [
          {
            "$ref": "#/components/schemas/LegalPerson"
          },
          {
            "required": [
              "birthDate"
            ],
            "type": "object",
            "properties": {
              "birthDate": {
                "type": "string",
                "format": "date"
              }
            }
          }
        ]
      },
      "CalculationRedemptionInterval": {
        "type": "string",
        "enum": [
          "MONTHLY",
          "QUARTERLY",
          "HALF_YEARLY",
          "YEARLY",
          "ONCE",
          "BIMONTHLY"
        ]
      },
      "CalculationRedemptionTerm": {
        "type": "object",
        "properties": {
          "redemptionAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "totalAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "remainingPrincipal": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "interestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "term": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "CalculationRedemptionType": {
        "type": "string",
        "enum": [
          "ANNUITY",
          "LINEAR",
          "LIFE_INSURANCE",
          "REDEMPTION_FREE",
          "CREDIT_OR_BANK_MORTGAGE",
          "INVESTMENT_MORTGAGE",
          "SAVINGS"
        ]
      },
      "CalculationRequest": {
        "type": "object",
        "properties": {
          "calculationTypes": {
            "type": "array",
            "description": "CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN].",
            "items": {
              "$ref": "#/components/schemas/CalculationType"
            }
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[]."
      },
      "CalculationResult": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "reference": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "normCalculationResult": "NormCalculationResult",
            "householdCalculationResult": "HouseholdCalculationResult",
            "assetCalculationResult": "AssetCalculationResult",
            "additionalLoanPaymentCapacityResult": "AdditionalLoanPaymentCapacityResult",
            "applicantCalculationResult": "ApplicantCalculationResult",
            "additionalLoanCalculationResult": "AdditionalLoanCalculationResult",
            "incomeCalculationResult": "IncomeCalculationResult",
            "loanCalculationResult": "LoanCalculationResult",
            "expenseCalculationResult": "ExpenseCalculationResult"
          }
        }
      },
      "CalculationTransaction": {
        "required": [
          "buyerCosts",
          "costs"
        ],
        "type": "object",
        "properties": {
          "costs": {
            "$ref": "#/components/schemas/Costs"
          },
          "buyerCosts": {
            "type": "boolean"
          }
        }
      },
      "CalculationType": {
        "type": "string",
        "enum": [
          "MAX_LOAN",
          "LTI",
          "LTV",
          "ADDITIONAL_LOAN",
          "ADDITIONAL_LOAN_PAYMENT_CAPACITY",
          "LTV_SURPLUS",
          "APR",
          "PAYMENT_TERMS",
          "LOAN_DURATION"
        ]
      },
      "CapitalAsset": {
        "type": "object",
        "properties": {
          "type": {
            "maxLength": 50,
            "minLength": 1,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "capitalAssetValuations": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "$ref": "#/components/schemas/CapitalAssetValuation"
            }
          }
        }
      },
      "CapitalAssetValuation": {
        "required": [
          "value"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "value": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "CapitalIncome": {
        "description": "Required fields for products=[CONSUMER_LOAN] are=[providerRef]. Required fields for products=[MORTGAGE_LOAN] are=[providerRef].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Income"
          },
          {
            "required": [
              "incomeAmount"
            ],
            "type": "object",
            "properties": {
              "incomeAmount": {
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/IncomeAmount"
              }
            }
          }
        ]
      },
      "Cell": {
        "type": "object",
        "properties": {
          "columnType": {
            "$ref": "#/components/schemas/ColumnType"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "CodeTableEntry": {
        "type": "object",
        "properties": {
          "displayLabel": {
            "type": "string"
          },
          "codeId": {
            "type": "string"
          },
          "code": {
            "type": "string"
          }
        }
      },
      "CodeTableLanguage": {
        "type": "string",
        "enum": [
          "FLEMISH",
          "FRENCH",
          "ENGLISH",
          "DUTCH"
        ]
      },
      "Collateral": {
        "required": [
          "amount",
          "type"
        ],
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "amount": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          }
        },
        "description": "Expansion wildcards=[collateral*]",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "guarantee": "Guarantee",
            "warranty": "Warranty",
            "mortgageRegistration": "MortgageRegistration"
          }
        }
      },
      "CollateralMutationDetail": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MutationDetail"
          },
          {
            "required": [
              "collateralMutationDetailItems"
            ],
            "type": "object",
            "properties": {
              "collateralMutationDetailItems": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/CollateralMutationDetailItem"
                }
              }
            }
          }
        ]
      },
      "CollateralMutationDetailItem": {
        "required": [
          "collateralExternalReference",
          "mutationCollateralType",
          "newRealestateReference",
          "originalRealEstateReference",
          "warranty2AssetReference"
        ],
        "type": "object",
        "properties": {
          "collateralExternalReference": {
            "type": "string"
          },
          "warranty2AssetReference": {
            "type": "string"
          },
          "newRealestateReference": {
            "type": "string"
          },
          "originalRealEstateReference": {
            "type": "string"
          },
          "mutationCollateralType": {
            "$ref": "#/components/schemas/MutationCollateralType"
          }
        }
      },
      "Column": {
        "type": "object",
        "properties": {
          "columnType": {
            "$ref": "#/components/schemas/ColumnType"
          },
          "displayName": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "ordinalPosition": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "ColumnType": {
        "type": "string",
        "enum": [
          "INTEGER_RANGE_CELL",
          "DECIMAL_RANGE_CELL",
          "PERCENTAGE_RANGE_CELL",
          "DATE_RANGE_CELL",
          "DATE_CELL",
          "TIME_CELL",
          "DATE_TIME_CELL",
          "INTEGER_CELL",
          "DECIMAL_CELL",
          "PERCENTAGE_CELL",
          "STRING_CELL",
          "STRING_PATTERN_CELL",
          "BOOLEAN_CELL"
        ]
      },
      "Comment": {
        "required": [
          "endUser",
          "text"
        ],
        "type": "object",
        "properties": {
          "endUser": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "$ref": "#/components/schemas/EndUser"
          },
          "text": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          }
        }
      },
      "CommercialProduct": {
        "type": "object",
        "properties": {
          "commercialProductId": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "name": {
            "type": "string"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ConstructionCosts": {
        "type": "object",
        "properties": {
          "otherCosts": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "$ref": "#/components/schemas/BaseCost"
            }
          },
          "energyNeutralityImprovements": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "interestLoss": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "totalRebuildingCosts": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "overdueMaintenanceCosts": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "energySavingsBudget": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "extraWork": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "rebuilding": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "contractAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "energyEfficiencyImprovements": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "constructionInterest": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "ConstructionFund": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[action, duration, termLength]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI, LTV] are=[duration, termLength]. Required fields for products=[CONSUMER_LOAN] are=[action, duration, termLength]. Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[duration, termLength].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Fund"
          },
          {
            "type": "object",
            "properties": {
              "withdrawableAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "isPrepaymentAllowed": {
                "type": "boolean"
              },
              "blocked": {
                "$ref": "#/components/schemas/Blocked"
              },
              "pendingAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              }
            }
          }
        ]
      },
      "ConstructionFundStatus": {
        "type": "string",
        "enum": [
          "REQUESTED",
          "ACTIVE",
          "ENDED"
        ]
      },
      "ConsumerLoan": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[interestRate].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Loan"
          },
          {
            "required": [
              "grossCreditAmount"
            ],
            "type": "object",
            "properties": {
              "desiredCreditAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "consumerLoanType": {
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN].",
                "$ref": "#/components/schemas/ConsumerLoanType"
              },
              "termPayment": {
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "grossCreditAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "loanPurposeDescription": {
                "type": "string",
                "description": "Relevant for products=[CONSUMER_LOAN]."
              },
              "loanParts": {
                "type": "array",
                "description": "Relevant for products=[CONSUMER_LOAN]. Expandable using [consumerLoanParts].",
                "items": {
                  "$ref": "#/components/schemas/LoanPart"
                }
              },
              "loanPurposeType": {
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN].",
                "$ref": "#/components/schemas/LoanPurposeType"
              },
              "nettCreditAmount": {
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "repaymentRate": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN].",
                "format": "double"
              },
              "status": {
                "description": "Relevant for products=[CONSUMER_LOAN].",
                "$ref": "#/components/schemas/ConsumerLoanStatus"
              }
            }
          }
        ]
      },
      "ConsumerLoanStatus": {
        "type": "string",
        "enum": [
          "APPROVED",
          "REJECTED",
          "NO_PRODUCT_OPTIONS_POSSIBLE"
        ]
      },
      "ConsumerLoanSummary": {
        "allOf": [
          {
            "$ref": "#/components/schemas/LoanSummary"
          },
          {
            "type": "object",
            "properties": {
              "proposalDate": {
                "type": "string",
                "format": "date"
              },
              "financeType": {
                "$ref": "#/components/schemas/FinancialProductType"
              },
              "creditAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              }
            }
          }
        ]
      },
      "ConsumerLoanType": {
        "type": "string",
        "enum": [
          "PERSONAL_LOAN",
          "REVOLVING_CREDIT",
          "REVOLVING_GOODS_CREDIT"
        ]
      },
      "ContactDetail": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "current": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          },
          "endDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "format": "date"
          },
          "type": {
            "type": "string"
          },
          "startDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "format": "date"
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "address": "Address",
            "phone": "Phone",
            "email": "Email"
          }
        }
      },
      "ContinuationReason": {
        "type": "string",
        "enum": [
          "QUALITY_IMPROVEMENT",
          "END_OF_RELATIONSHIP",
          "SUCCESSION",
          "LEASEHOLD_BUYOFF",
          "FULL_OWNERSHIP_OF_LAND",
          "GENERIC_CONTRACT_TRANSFER",
          "SITUATION_IMPROVEMENT"
        ]
      },
      "Contract": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "contractDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "format": "date"
          },
          "product": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "$ref": "#/components/schemas/Product"
          },
          "contractNumber": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          },
          "entityId": {
            "type": "string"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          },
          "duration": {
            "minimum": 1,
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, LTV, ADDITIONAL_LOAN_PAYMENT_CAPACITY, PAYMENT_TERMS].",
            "format": "int32"
          },
          "externalReference": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "currentFixedRateEndDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "providerRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [provider]."
          },
          "expectedEndDate": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS].",
            "format": "date"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "originalEffectiveDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "format": "date"
          },
          "termLength": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, LTV].",
            "$ref": "#/components/schemas/PeriodLength"
          },
          "provider": {
            "description": "Expandable using [loanPartProvider].",
            "$ref": "#/components/schemas/Organization"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "action": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "$ref": "#/components/schemas/ContractAction"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          },
          "effectiveDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "format": "date"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[action, duration, termLength]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI, LTV] are=[duration, termLength]. Required fields for products=[CONSUMER_LOAN] are=[action, duration, termLength]. Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[duration, termLength].",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "mortgageLoan": "MortgageLoan",
            "fund": "Fund",
            "consumerLoan": "ConsumerLoan",
            "loanPart": "LoanPart"
          }
        }
      },
      "ContractAction": {
        "type": "string",
        "enum": [
          "CREATE",
          "CONTINUE",
          "DELETE"
        ]
      },
      "Contractor": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[severalLiability, fiscalResidence]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[fiscalResidence]. Expansion wildcards=[party*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Party"
          },
          {
            "type": "object",
            "properties": {
              "incomes": {
                "type": "array",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Expandable using [incomes].",
                "items": {
                  "discriminator": {
                    "propertyName": "type",
                    "mapping": {
                      "otherIncome": "OtherIncome",
                      "socialBenefitIncome": "SocialBenefitIncome",
                      "independentIncome": "IndependentIncome",
                      "rentalIncome": "RentalIncome",
                      "employmentIncome": "EmploymentIncome",
                      "pensionIncome": "PensionIncome",
                      "substantialInterestIncome": "SubstantialInterestIncome",
                      "capitalIncome": "CapitalIncome"
                    }
                  },
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/SubstantialInterestIncome"
                    },
                    {
                      "$ref": "#/components/schemas/SocialBenefitIncome"
                    },
                    {
                      "$ref": "#/components/schemas/IndependentIncome"
                    },
                    {
                      "$ref": "#/components/schemas/EmploymentIncome"
                    },
                    {
                      "$ref": "#/components/schemas/OtherIncome"
                    },
                    {
                      "$ref": "#/components/schemas/CapitalIncome"
                    },
                    {
                      "$ref": "#/components/schemas/PensionIncome"
                    },
                    {
                      "$ref": "#/components/schemas/RentalIncome"
                    }
                  ]
                }
              },
              "residencePermitType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI].",
                "$ref": "#/components/schemas/ResidencePermitType"
              },
              "socialSecurityNumber": {
                "type": "string",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN]."
              },
              "officialDocuments": {
                "type": "array",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN]. Expandable using [officialDocuments].",
                "items": {
                  "$ref": "#/components/schemas/OfficialDocument"
                }
              },
              "fiscalResidence": {
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/CountryCode"
              },
              "subsidyRoleType": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "maritalStates": {
                "type": "array",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
                "items": {
                  "$ref": "#/components/schemas/MaritalState"
                }
              },
              "severalLiability": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "financialSituation": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/FinancialSituation"
              },
              "customerSegment": {
                "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [customerSegment].",
                "$ref": "#/components/schemas/CustomerSegment"
              },
              "nrOfDependents": {
                "type": "integer",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
                "format": "int32"
              },
              "capitalAssets": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [capitalAssets].",
                "items": {
                  "$ref": "#/components/schemas/CapitalAsset"
                }
              },
              "expenses": {
                "type": "array",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Expandable using [expenses].",
                "items": {
                  "$ref": "#/components/schemas/Expense"
                }
              },
              "residenceSituation": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
                "$ref": "#/components/schemas/ResidenceSituationType"
              },
              "isPaymentOutRole": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              }
            }
          }
        ]
      },
      "ContractorSummary": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PartySummary"
          },
          {
            "type": "object"
          }
        ]
      },
      "Cost": {
        "required": [
          "interval",
          "type",
          "amount"
        ],
        "type": "object",
        "properties": {
          "duration": {
            "type": "integer",
            "format": "int32"
          },
          "amount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "financedInMortgage": {
            "type": "boolean"
          },
          "durationInterval": {
            "$ref": "#/components/schemas/PeriodLength"
          },
          "active": {
            "type": "boolean"
          },
          "interval": {
            "$ref": "#/components/schemas/PeriodLength"
          },
          "source": {
            "$ref": "#/components/schemas/CostSource"
          },
          "type": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "finance": {
            "type": "boolean"
          }
        }
      },
      "CostSource": {
        "type": "string",
        "enum": [
          "USER",
          "ORIGINATION"
        ]
      },
      "Costs": {
        "required": [
          "financing"
        ],
        "type": "object",
        "properties": {
          "constructionReport": {
            "type": "number",
            "format": "double"
          },
          "financing": {
            "type": "number",
            "format": "double"
          },
          "acquisition": {
            "type": "number",
            "format": "double"
          }
        }
      },
      "CostsMode": {
        "type": "string",
        "enum": [
          "ORIGINATION_ONLY",
          "PROVIDED_ONLY",
          "COMBINED"
        ]
      },
      "CountryCode": {
        "type": "string",
        "enum": [
          "AF",
          "AX",
          "AL",
          "DZ",
          "AS",
          "AD",
          "AO",
          "AI",
          "AIDJ",
          "AQ",
          "AG",
          "AR",
          "AM",
          "ANHH",
          "AW",
          "AU",
          "AT",
          "AZ",
          "BS",
          "BH",
          "BD",
          "BB",
          "BY",
          "BE",
          "BZ",
          "BJ",
          "BM",
          "BT",
          "BU",
          "BUMM",
          "BO",
          "BQ",
          "BQAQ",
          "BA",
          "BW",
          "BV",
          "BR",
          "IO",
          "BN",
          "BG",
          "BF",
          "BI",
          "BYAA",
          "KH",
          "CM",
          "CA",
          "CV",
          "KY",
          "CF",
          "TD",
          "CL",
          "CN",
          "CX",
          "CC",
          "CO",
          "KM",
          "CG",
          "CD",
          "CK",
          "CR",
          "CSHH",
          "CSXX",
          "CI",
          "CTKI",
          "HR",
          "CW",
          "CU",
          "CY",
          "CZ",
          "DK",
          "DJ",
          "DM",
          "DO",
          "DYBJ",
          "EC",
          "EG",
          "SV",
          "GQ",
          "ER",
          "EE",
          "ET",
          "FK",
          "FO",
          "FQHH",
          "FXFR",
          "FJ",
          "FI",
          "FR",
          "GF",
          "PF",
          "TF",
          "GA",
          "GM",
          "GE",
          "GEHH",
          "DDDE",
          "DE",
          "GH",
          "GI",
          "GR",
          "GL",
          "GD",
          "GP",
          "GU",
          "GT",
          "GG",
          "GN",
          "GW",
          "GY",
          "HT",
          "HVBF",
          "HM",
          "VA",
          "HN",
          "HK",
          "HU",
          "IS",
          "IN",
          "ID",
          "IR",
          "IQ",
          "IE",
          "IM",
          "IL",
          "IT",
          "JM",
          "JP",
          "JE",
          "JO",
          "JT",
          "JTUM",
          "KZ",
          "KE",
          "KI",
          "KP",
          "KR",
          "KW",
          "KG",
          "LA",
          "LV",
          "LB",
          "LS",
          "LR",
          "LY",
          "LI",
          "LT",
          "LU",
          "MO",
          "MK",
          "MG",
          "MW",
          "MY",
          "MV",
          "ML",
          "MT",
          "MH",
          "MI",
          "MIUM",
          "MQ",
          "MR",
          "MU",
          "YT",
          "MX",
          "FM",
          "MD",
          "MC",
          "MN",
          "ME",
          "MS",
          "MA",
          "MZ",
          "MM",
          "NA",
          "NR",
          "NP",
          "NTHH",
          "NL",
          "NC",
          "NZ",
          "NI",
          "NQAQ",
          "NE",
          "NG",
          "NU",
          "NF",
          "NHVU",
          "MP",
          "NO",
          "OM",
          "PK",
          "PW",
          "PS",
          "PUMM",
          "PUUM",
          "PA",
          "PCHH",
          "PG",
          "PY",
          "PZPA",
          "RHZW",
          "PE",
          "PH",
          "PN",
          "PL",
          "PT",
          "PR",
          "QA",
          "RE",
          "RO",
          "RU",
          "RW",
          "BL",
          "SH",
          "KN",
          "LC",
          "MF",
          "PM",
          "VC",
          "WS",
          "SM",
          "ST",
          "SUHH",
          "SA",
          "SN",
          "RS",
          "SC",
          "SL",
          "SG",
          "SX",
          "SK",
          "SI",
          "SB",
          "SO",
          "ZA",
          "GS",
          "SS",
          "ES",
          "LK",
          "SD",
          "SR",
          "SJ",
          "SKIN",
          "SZ",
          "SE",
          "CH",
          "SY",
          "TW",
          "TJ",
          "TZ",
          "TH",
          "TL",
          "TG",
          "TK",
          "TO",
          "TPTL",
          "TT",
          "TN",
          "TR",
          "TM",
          "TC",
          "TV",
          "UG",
          "UA",
          "AE",
          "GB",
          "US",
          "UM",
          "UY",
          "UZ",
          "VU",
          "VD",
          "VDVN",
          "VE",
          "VN",
          "VG",
          "VI",
          "WF",
          "WK",
          "WKUM",
          "EH",
          "YE",
          "ZM",
          "ZW",
          "YDYE",
          "YUCS",
          "ZRCD",
          "ZZ"
        ]
      },
      "CraApplication": {
        "required": [
          "applicationDate"
        ],
        "type": "object",
        "properties": {
          "proposalLastAcceptDate": {
            "type": "string",
            "format": "date"
          },
          "transfer": {
            "$ref": "#/components/schemas/CraTransfer"
          },
          "rejectionReasons": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "applicationDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "CraDossier": {
        "required": [
          "intermediary",
          "mortgageLoans",
          "parties",
          "realEstates",
          "source"
        ],
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/components/schemas/Metadata"
          },
          "documents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Document"
            }
          },
          "entityId": {
            "type": "string"
          },
          "source": {
            "$ref": "#/components/schemas/Source"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "intermediary": {
            "$ref": "#/components/schemas/Intermediary"
          },
          "mortgageLoans": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MortgageLoan"
            }
          },
          "realEstates": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RealEstate"
            }
          },
          "externalReference": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "notary": {
            "$ref": "#/components/schemas/Notary"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "application": {
            "$ref": "#/components/schemas/CraApplication"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "parties": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "funder": "Funder",
                  "contractor": "Contractor",
                  "notary": "Notary",
                  "guarantor": "Guarantor",
                  "calculationContractor": "CalculationContractor",
                  "intermediary": "Intermediary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Intermediary"
                },
                {
                  "$ref": "#/components/schemas/Contractor"
                },
                {
                  "$ref": "#/components/schemas/Funder"
                },
                {
                  "$ref": "#/components/schemas/Guarantor"
                },
                {
                  "$ref": "#/components/schemas/Notary"
                },
                {
                  "$ref": "#/components/schemas/CalculationContractor"
                }
              ]
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          },
          "stipulations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Stipulation"
            }
          }
        }
      },
      "CraTransfer": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "transferComplete": {
            "type": "boolean"
          },
          "originalDate": {
            "type": "string",
            "format": "date"
          },
          "lastDateAfterExtension": {
            "type": "string",
            "format": "date"
          },
          "dateDefinitive": {
            "type": "boolean"
          },
          "extended": {
            "type": "boolean"
          },
          "lastDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "CreateApplicationRequest": {
        "required": [
          "label",
          "legalPersons",
          "parties"
        ],
        "type": "object",
        "properties": {
          "mortgageLoan": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/MortgageLoan"
          },
          "comments": {
            "type": "array",
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
            "items": {
              "$ref": "#/components/schemas/Comment"
            }
          },
          "collaterals": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "guarantee": "Guarantee",
                  "warranty": "Warranty",
                  "mortgageRegistration": "MortgageRegistration"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Warranty"
                },
                {
                  "$ref": "#/components/schemas/MortgageRegistration"
                },
                {
                  "$ref": "#/components/schemas/Guarantee"
                }
              ]
            }
          },
          "bankAccounts": {
            "type": "array",
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
            "items": {
              "$ref": "#/components/schemas/BankAccount"
            }
          },
          "customerCode": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/CustomerCode"
          },
          "label": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "$ref": "#/components/schemas/LabelCode"
          },
          "legalPersons": {
            "maxItems": 2147483647,
            "minItems": 1,
            "type": "array",
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "person": "Person",
                  "calculationPerson": "CalculationPerson",
                  "organization": "Organization"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/CalculationPerson"
                },
                {
                  "$ref": "#/components/schemas/Organization"
                },
                {
                  "$ref": "#/components/schemas/Person"
                }
              ]
            }
          },
          "contracts": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "mortgageLoan": "MortgageLoan",
                  "fund": "Fund",
                  "consumerLoan": "ConsumerLoan",
                  "loanPart": "LoanPart"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Fund"
                },
                {
                  "$ref": "#/components/schemas/LoanPart"
                },
                {
                  "$ref": "#/components/schemas/MortgageLoan"
                },
                {
                  "$ref": "#/components/schemas/ConsumerLoan"
                }
              ]
            }
          },
          "proposalLastAcceptDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "relatedContracts": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "relatedLoan": "RelatedLoan",
                  "relatedInsurance": "RelatedInsurance"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/RelatedLoan"
                },
                {
                  "$ref": "#/components/schemas/RelatedInsurance"
                }
              ]
            }
          },
          "assets": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "realEstateSubUnit": "RealEstateSubUnit",
                  "additionalRealEstate": "AdditionalRealEstate",
                  "realEstate": "RealEstate"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/RealEstateSubUnit"
                },
                {
                  "$ref": "#/components/schemas/AdditionalRealEstate"
                },
                {
                  "$ref": "#/components/schemas/RealEstate"
                }
              ]
            }
          },
          "transfer": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/Transfer"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "parties": {
            "maxItems": 2147483647,
            "minItems": 1,
            "type": "array",
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "funder": "Funder",
                  "contractor": "Contractor",
                  "notary": "Notary",
                  "guarantor": "Guarantor",
                  "calculationContractor": "CalculationContractor",
                  "intermediary": "Intermediary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Intermediary"
                },
                {
                  "$ref": "#/components/schemas/Contractor"
                },
                {
                  "$ref": "#/components/schemas/Funder"
                },
                {
                  "$ref": "#/components/schemas/Guarantor"
                },
                {
                  "$ref": "#/components/schemas/Notary"
                },
                {
                  "$ref": "#/components/schemas/CalculationContractor"
                }
              ]
            }
          },
          "mortgageRegistrations": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "$ref": "#/components/schemas/MortgageRegistration"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "consumerLoan": {
            "description": "Relevant for products=[CONSUMER_LOAN].",
            "$ref": "#/components/schemas/ConsumerLoan"
          },
          "explains": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Explain"
            }
          },
          "adviceType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/AdviceType"
          },
          "transaction": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/TransferTransaction"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[mortgageLoan, assets]. Required fields for products=[CONSUMER_LOAN] are=[consumerLoan]."
      },
      "CreateApplicationResponse": {
        "type": "object",
        "properties": {
          "traceId": {
            "type": "string"
          },
          "dossierUid": {
            "type": "string"
          },
          "dossierNumber": {
            "type": "string"
          }
        }
      },
      "CreateDeclarationResult": {
        "required": [
          "success"
        ],
        "type": "object",
        "properties": {
          "reference": {
            "type": "string"
          },
          "success": {
            "type": "boolean"
          },
          "errorMessage": {
            "type": "string"
          },
          "etag": {
            "type": "string"
          },
          "declaration": {
            "$ref": "#/components/schemas/Declaration"
          }
        }
      },
      "CreateDossierOperationResponse": {
        "type": "object",
        "properties": {
          "technicalDossierHandling": {
            "$ref": "#/components/schemas/TechnicalDossierHandling"
          },
          "dossierEvent": {
            "$ref": "#/components/schemas/DossierEvent"
          },
          "dossierPhase": {
            "type": "string"
          },
          "dossierStatus": {
            "type": "string"
          },
          "operation": {
            "$ref": "#/components/schemas/DossierOperation"
          },
          "info": {
            "type": "string"
          }
        }
      },
      "CreateMessageResponse": {
        "type": "object",
        "properties": {
          "traceId": {
            "type": "string"
          },
          "messageId": {
            "type": "string"
          },
          "dossierNumber": {
            "type": "string"
          }
        }
      },
      "CustomerCode": {
        "required": [
          "code"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "name": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          }
        }
      },
      "CustomerDueDiligenceReport": {
        "allOf": [
          {
            "$ref": "#/components/schemas/KycReport"
          },
          {
            "type": "object",
            "properties": {
              "complianceRisk": {
                "$ref": "#/components/schemas/RiskType"
              },
              "creditRisk": {
                "$ref": "#/components/schemas/RiskType"
              },
              "riskAssessments": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RiskAssessment"
                }
              },
              "risk": {
                "$ref": "#/components/schemas/RiskType"
              },
              "latestUpdate": {
                "type": "string",
                "format": "date-time"
              }
            }
          }
        ]
      },
      "CustomerSegment": {
        "type": "object",
        "properties": {
          "isExistingCustomer": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "customerType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/CustomerType"
          }
        }
      },
      "CustomerType": {
        "type": "string",
        "enum": [
          "CONSUMER",
          "BUSINESS",
          "EMPLOYEE",
          "VIP"
        ]
      },
      "Declaration": {
        "required": [
          "declarationType",
          "detail"
        ],
        "type": "object",
        "properties": {
          "declarationType": {
            "$ref": "#/components/schemas/DeclarationType"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entryDateTime": {
            "type": "string",
            "format": "date-time"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "detail": {
            "$ref": "#/components/schemas/DeclarationDetail"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "closingDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "DeclarationDetail": {
        "required": [
          "amount",
          "status"
        ],
        "type": "object",
        "properties": {
          "reason": {
            "type": "string"
          },
          "amount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "isResubmission": {
            "type": "boolean"
          },
          "rejectedReference": {
            "type": "string"
          },
          "documents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DeclarationDocument"
            }
          },
          "resubmittedReference": {
            "type": "string"
          },
          "externalValidationApproved": {
            "type": "boolean"
          },
          "submissionAccount": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "reference": {
            "type": "string"
          },
          "evaluation": {
            "$ref": "#/components/schemas/DeclarationEvaluation"
          },
          "externalValidationDate": {
            "type": "string",
            "format": "date"
          },
          "resultBRE": {
            "type": "string"
          },
          "isLastDeclarationRequest": {
            "type": "boolean"
          },
          "isForeignSupplier": {
            "type": "boolean"
          },
          "amountPurposeTooLow": {
            "type": "boolean"
          },
          "supplier": {
            "$ref": "#/components/schemas/DeclarationSupplier"
          },
          "payment": {
            "$ref": "#/components/schemas/DeclarationPayment"
          },
          "invoice": {
            "$ref": "#/components/schemas/DeclarationInvoice"
          },
          "constructionDepotPurposeType": {
            "type": "integer",
            "format": "int32"
          },
          "status": {
            "$ref": "#/components/schemas/DeclarationStatus"
          }
        }
      },
      "DeclarationDocument": {
        "type": "object",
        "properties": {
          "fileName": {
            "type": "string"
          },
          "documentType": {
            "type": "string"
          },
          "link": {
            "type": "string"
          },
          "title": {
            "type": "string"
          }
        }
      },
      "DeclarationEvaluation": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "description": {
            "type": "string"
          },
          "employee": {
            "type": "string"
          },
          "status": {
            "$ref": "#/components/schemas/DeclarationEvaluationStatus"
          }
        }
      },
      "DeclarationEvaluationStatus": {
        "type": "string",
        "enum": [
          "PENDING",
          "APPROVED",
          "PAID",
          "REJECTED",
          "RESUBMITTED"
        ]
      },
      "DeclarationInvoice": {
        "required": [
          "date",
          "number"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "number": {
            "type": "string"
          }
        }
      },
      "DeclarationPayment": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "reference": {
            "type": "string"
          },
          "amount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "isPaymentForDelivery": {
            "type": "boolean"
          },
          "isPaymentToCustomer": {
            "type": "boolean"
          },
          "iban": {
            "type": "string"
          },
          "isPaymentOnDate": {
            "type": "boolean"
          },
          "partyId": {
            "type": "string"
          },
          "preferredDate": {
            "type": "string",
            "format": "date"
          },
          "isDelayedProofOfPayment": {
            "type": "boolean"
          }
        }
      },
      "DeclarationResult": {
        "required": [
          "reference",
          "success"
        ],
        "type": "object",
        "properties": {
          "reference": {
            "type": "string"
          },
          "success": {
            "type": "boolean"
          },
          "errorMessage": {
            "type": "string"
          }
        }
      },
      "DeclarationStatus": {
        "type": "string",
        "enum": [
          "INITIAL",
          "SUBMITTED",
          "APPROVED",
          "PAID",
          "REJECTED",
          "RESUBMITTED",
          "PAYMENT_NOT_EXECUTED"
        ]
      },
      "DeclarationSupplier": {
        "type": "object",
        "properties": {
          "companyNumber": {
            "type": "string"
          },
          "iban": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "location": {
            "type": "string"
          }
        }
      },
      "DeclarationType": {
        "type": "string",
        "enum": [
          "CONSTRUCTION_DEPOT",
          "SUBSIDY"
        ]
      },
      "DeedTemplate": {
        "required": [
          "code"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "description": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          }
        }
      },
      "DeterminationSource": {
        "type": "string",
        "enum": [
          "INTERFACE",
          "MANUAL"
        ]
      },
      "Document": {
        "type": "object",
        "properties": {
          "originalFileName": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "dateTime": {
            "type": "string",
            "format": "date-time"
          },
          "size": {
            "minimum": 0,
            "type": "integer",
            "format": "int32"
          },
          "documentType": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "mimeType": {
            "maxLength": 100,
            "minLength": 1,
            "pattern": "(application|audio|example|image|message|model|multipart|text|video)/[-+\\.\\w]+",
            "type": "string"
          },
          "documentRef": {
            "type": "string"
          }
        }
      },
      "DocumentCategoryType": {
        "type": "string",
        "enum": [
          "INTEREST_PROPOSAL",
          "OFFER",
          "NOTARY_INSTRUCTIONS",
          "DOCUMENTS_FROM_NOTARY"
        ]
      },
      "DocumentSummary": {
        "type": "object",
        "properties": {
          "dateTime": {
            "type": "string",
            "format": "date-time"
          },
          "originalFileName": {
            "type": "string"
          },
          "documentRef": {
            "type": "string"
          }
        }
      },
      "DocumentTempAssemblyResponse": {
        "type": "object",
        "properties": {
          "documentRef": {
            "type": "string"
          },
          "tempAssemblyId": {
            "type": "string"
          }
        }
      },
      "DocumentUploadStatus": {
        "type": "string",
        "enum": [
          "SUCCESS",
          "FAILURE"
        ]
      },
      "Dossier": {
        "type": "object",
        "properties": {
          "reports": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "kycReport": "KycReport"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/KycReport"
                }
              ]
            }
          },
          "collaterals": {
            "type": "array",
            "description": "Expandable using [collaterals].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "guarantee": "Guarantee",
                  "warranty": "Warranty",
                  "mortgageRegistration": "MortgageRegistration"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Warranty"
                },
                {
                  "$ref": "#/components/schemas/MortgageRegistration"
                },
                {
                  "$ref": "#/components/schemas/Guarantee"
                }
              ]
            }
          },
          "technicalDossierHandling": {
            "$ref": "#/components/schemas/TechnicalDossierHandling"
          },
          "customerCode": {
            "$ref": "#/components/schemas/CustomerCode"
          },
          "contracts": {
            "type": "array",
            "description": "Expandable using [contracts].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "mortgageLoan": "MortgageLoan",
                  "fund": "Fund",
                  "consumerLoan": "ConsumerLoan",
                  "loanPart": "LoanPart"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Fund"
                },
                {
                  "$ref": "#/components/schemas/LoanPart"
                },
                {
                  "$ref": "#/components/schemas/MortgageLoan"
                },
                {
                  "$ref": "#/components/schemas/ConsumerLoan"
                }
              ]
            }
          },
          "number": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "assets": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [assets].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "realEstateSubUnit": "RealEstateSubUnit",
                  "additionalRealEstate": "AdditionalRealEstate",
                  "realEstate": "RealEstate"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/RealEstateSubUnit"
                },
                {
                  "$ref": "#/components/schemas/AdditionalRealEstate"
                },
                {
                  "$ref": "#/components/schemas/RealEstate"
                }
              ]
            }
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "relatedDocuments": {
            "type": "array",
            "description": "Expandable using [relatedDocuments].",
            "items": {
              "$ref": "#/components/schemas/RelatedDocument"
            }
          },
          "mortgageRegistrations": {
            "type": "array",
            "description": "Expandable using [mortgageRegistrations].",
            "items": {
              "$ref": "#/components/schemas/MortgageRegistration"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "consumerLoan": {
            "description": "Expandable using [consumerLoan].",
            "$ref": "#/components/schemas/ConsumerLoan"
          },
          "explains": {
            "type": "array",
            "description": "Expandable using [explains].",
            "items": {
              "$ref": "#/components/schemas/Explain"
            }
          },
          "stipulations": {
            "type": "array",
            "description": "Expandable using [stipulations].",
            "items": {
              "$ref": "#/components/schemas/Stipulation"
            }
          },
          "stateHistoryEntries": {
            "type": "array",
            "description": "Expandable using [stateHistory].",
            "items": {
              "$ref": "#/components/schemas/StateHistoryEntry"
            }
          },
          "phase": {
            "type": "string"
          },
          "mortgageLoan": {
            "description": "Expandable using [mortgageLoan].",
            "$ref": "#/components/schemas/MortgageLoan"
          },
          "requestType": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "created": {
            "type": "string",
            "format": "date-time"
          },
          "entityId": {
            "type": "string"
          },
          "label": {
            "$ref": "#/components/schemas/LabelCode"
          },
          "legalPersons": {
            "type": "array",
            "description": "Expandable using [legalPersons].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "person": "Person",
                  "calculationPerson": "CalculationPerson",
                  "organization": "Organization"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/CalculationPerson"
                },
                {
                  "$ref": "#/components/schemas/Organization"
                },
                {
                  "$ref": "#/components/schemas/Person"
                }
              ]
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "relatedContracts": {
            "type": "array",
            "description": "Expandable using [relatedContracts].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "relatedLoan": "RelatedLoan",
                  "relatedInsurance": "RelatedInsurance"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/RelatedLoan"
                },
                {
                  "$ref": "#/components/schemas/RelatedInsurance"
                }
              ]
            }
          },
          "application": {
            "$ref": "#/components/schemas/Application"
          },
          "rejectionReasons": {
            "type": "array",
            "description": "Expandable using [dossierRejectionReasons].",
            "items": {
              "type": "string"
            }
          },
          "parties": {
            "type": "array",
            "description": "Expandable using [parties].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "funder": "Funder",
                  "contractor": "Contractor",
                  "notary": "Notary",
                  "guarantor": "Guarantor",
                  "calculationContractor": "CalculationContractor",
                  "intermediary": "Intermediary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Intermediary"
                },
                {
                  "$ref": "#/components/schemas/Contractor"
                },
                {
                  "$ref": "#/components/schemas/Funder"
                },
                {
                  "$ref": "#/components/schemas/Guarantor"
                },
                {
                  "$ref": "#/components/schemas/Notary"
                },
                {
                  "$ref": "#/components/schemas/CalculationContractor"
                }
              ]
            }
          },
          "handling": {
            "$ref": "#/components/schemas/DossierHandling"
          },
          "lastModified": {
            "type": "string",
            "format": "date-time"
          },
          "transaction": {
            "description": "Expandable using [transaction].",
            "$ref": "#/components/schemas/TransferTransaction"
          },
          "status": {
            "type": "string"
          }
        }
      },
      "DossierEvent": {
        "type": "object",
        "properties": {
          "dateTime": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string"
          },
          "details": {
            "type": "string"
          }
        }
      },
      "DossierHandling": {
        "type": "string",
        "enum": [
          "IN_PROGRESS",
          "CANCELLED",
          "REJECTED",
          "WAITING_FOR_DOCUMENTS",
          "APPROVED"
        ]
      },
      "DossierMutation": {
        "required": [
          "dossierMutationList",
          "referenceDate"
        ],
        "type": "object",
        "properties": {
          "dossierMutationList": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DossierMutationItem"
            }
          },
          "referenceDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "DossierMutationItem": {
        "required": [
          "channel",
          "conditions",
          "details",
          "expectedPaymentAmount",
          "mutationKind",
          "mutationStatusHistory",
          "name",
          "paymentMethod",
          "paymentProviderReference",
          "paymentReference",
          "seqNo",
          "status",
          "validUntil"
        ],
        "type": "object",
        "properties": {
          "reasons": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "seqNo": {
            "type": "integer",
            "format": "int32"
          },
          "paymentReference": {
            "type": "string"
          },
          "mutationStatusHistory": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MutationStatusHistoryItem"
            }
          },
          "channel": {
            "type": "integer",
            "format": "int32"
          },
          "mutationKind": {
            "$ref": "#/components/schemas/MutationKind"
          },
          "paymentProviderReference": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "paymentMethod": {
            "$ref": "#/components/schemas/PaymentMethod"
          },
          "validUntil": {
            "type": "string",
            "format": "date"
          },
          "details": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "collateralMutationDetail": "CollateralMutationDetail",
                  "amortizationVersionToBeActivatedMutationDetail": "AmortizationVersionToBeActivatedMutationDetail",
                  "roleMutationDetail": "RoleMutationDetail"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/CollateralMutationDetail"
                },
                {
                  "$ref": "#/components/schemas/RoleMutationDetail"
                },
                {
                  "$ref": "#/components/schemas/AmortizationVersionToBeActivatedMutationDetail"
                }
              ]
            }
          },
          "expectedPaymentAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "conditions": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "requiredActionCondition": "RequiredActionCondition",
                  "freeCondition": "FreeCondition",
                  "mutationToBeActiveCondition": "MutationToBeActiveCondition",
                  "missingDocumentCondition": "MissingDocumentCondition",
                  "prepaymentCondition": "PrepaymentCondition"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/FreeCondition"
                },
                {
                  "$ref": "#/components/schemas/PrepaymentCondition"
                },
                {
                  "$ref": "#/components/schemas/MissingDocumentCondition"
                },
                {
                  "$ref": "#/components/schemas/RequiredActionCondition"
                },
                {
                  "$ref": "#/components/schemas/MutationToBeActiveCondition"
                }
              ]
            }
          },
          "status": {
            "$ref": "#/components/schemas/MutationStatus"
          }
        }
      },
      "DossierOperation": {
        "required": [
          "name",
          "result"
        ],
        "type": "object",
        "properties": {
          "result": {
            "$ref": "#/components/schemas/OperationResult"
          },
          "name": {
            "maxLength": 40,
            "minLength": 0,
            "type": "string"
          },
          "errorDetails": {
            "type": "string"
          }
        },
        "description": "When field=[result] has value/s=[ERROR] then field/s=[errorDetails] is/are required"
      },
      "DossierOptions": {
        "type": "object",
        "properties": {
          "loanLifeCycleTypes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LoanLifeCycleType"
            }
          },
          "productFamilyType": {
            "$ref": "#/components/schemas/ProductFamilyType"
          }
        }
      },
      "DossierSort": {
        "required": [
          "namedField"
        ],
        "type": "object",
        "properties": {
          "namedField": {
            "$ref": "#/components/schemas/FieldFilterType"
          },
          "direction": {
            "$ref": "#/components/schemas/SortDirType"
          }
        }
      },
      "DossierSummary": {
        "type": "object",
        "properties": {
          "phase": {
            "type": "string"
          },
          "productFamilyType": {
            "$ref": "#/components/schemas/ProductFamilyType"
          },
          "dossierUid": {
            "type": "string"
          },
          "requestType": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "created": {
            "type": "string",
            "format": "date-time"
          },
          "entityId": {
            "type": "string"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "dossierNumber": {
            "type": "string"
          },
          "application": {
            "description": "Expandable using [applicationSummary].",
            "$ref": "#/components/schemas/ApplicationSummary"
          },
          "handling": {
            "$ref": "#/components/schemas/TechnicalDossierHandling"
          },
          "activeTasks": {
            "type": "integer",
            "description": "Relevant for products=[CONSUMER_LOAN].",
            "format": "int32"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "lastModified": {
            "type": "string",
            "format": "date-time"
          },
          "status": {
            "type": "string"
          },
          "errorDetails": {
            "type": "string"
          },
          "userClaim": {
            "description": "Relevant for products=[CONSUMER_LOAN].",
            "$ref": "#/components/schemas/UserClaim"
          },
          "stipulations": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [stipulationsSummary].",
            "items": {
              "$ref": "#/components/schemas/StipulationSummary"
            }
          }
        }
      },
      "DossierWithMetadata": {
        "type": "object",
        "properties": {
          "sourceSystem": {
            "$ref": "#/components/schemas/SourceSystem"
          },
          "dossier": {
            "$ref": "#/components/schemas/Dossier"
          }
        }
      },
      "DueAmountRepaymentHandling": {
        "type": "object",
        "properties": {
          "capitalizeInterest": {
            "type": "boolean"
          },
          "transferringCreditReference": {
            "type": "string"
          },
          "thirdPartyInterventionPercentage": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "DueDate": {
        "type": "object",
        "properties": {
          "next": {
            "type": "string",
            "format": "date"
          },
          "previous": {
            "type": "string",
            "format": "date"
          },
          "nextNr": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "DueDateFund": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[action, duration, termLength]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI, LTV] are=[duration, termLength]. Required fields for products=[CONSUMER_LOAN] are=[action, duration, termLength]. Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[duration, termLength].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Fund"
          },
          {
            "type": "object",
            "properties": {
              "previousInterestCalculationDate": {
                "type": "string",
                "format": "date"
              }
            }
          }
        ]
      },
      "Email": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ContactDetail"
          },
          {
            "required": [
              "emailAddress",
              "emailType"
            ],
            "type": "object",
            "properties": {
              "emailAddress": {
                "maxLength": 255,
                "minLength": 1,
                "pattern": "[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,}",
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "emailType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
                "$ref": "#/components/schemas/EmailType"
              }
            }
          }
        ]
      },
      "EmailType": {
        "type": "string",
        "enum": [
          "PERSONAL",
          "WORK",
          "BUSINESS"
        ]
      },
      "EmploymentContractType": {
        "type": "string",
        "enum": [
          "INDEFINITELY",
          "CERTAIN_DURATION_WITH_INTENTION",
          "CERTAIN_DURATION_WITHOUT_INTENT",
          "SEASONAL_CONTRACT",
          "FLEXIBLE_WITH_PERSPECTIVE_STATEMENT",
          "FLEXIBLE_WITHOUT_PERSPECTIVE_STATEMENT",
          "FLEXIBLE_EMPLOYMENT_RELATION",
          "TEMPORARY"
        ]
      },
      "EmploymentIncome": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[participationType]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[participationType].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Income"
          },
          {
            "required": [
              "contractType"
            ],
            "type": "object",
            "properties": {
              "contractType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/EmploymentContractType"
              },
              "employmentYearly": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Expandable using [employmentYearly].",
                "$ref": "#/components/schemas/EmploymentYearly"
              },
              "incomeAmounts": {
                "maxItems": 2147483647,
                "minItems": 1,
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "items": {
                  "$ref": "#/components/schemas/IncomeAmount"
                }
              },
              "probation": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/Probation"
              },
              "participationType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/EmploymentParticipationType"
              },
              "incomeAllowance": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/Amount"
              },
              "wageGarnishment": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]."
              },
              "lifeCycleArrangement": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/Amount"
              },
              "irregularityAllowance": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/Amount"
              },
              "averageHoursPerWeek": {
                "minimum": 1,
                "type": "integer",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "format": "int32"
              },
              "vebAllowance": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/Amount"
              },
              "flexWork": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/FlexWork"
              },
              "includedInIncomeStatement": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "dga": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]."
              }
            }
          }
        ]
      },
      "EmploymentParticipationType": {
        "type": "string",
        "enum": [
          "FULL_TIME",
          "PART_TIME",
          "UNKNOWN"
        ]
      },
      "EmploymentYearly": {
        "type": "object",
        "properties": {
          "thirteenthMonth": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "$ref": "#/components/schemas/Amount"
          },
          "fixedFourteenthMonth": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI].",
            "$ref": "#/components/schemas/Amount"
          },
          "fixedYearEndBonus": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "$ref": "#/components/schemas/Amount"
          },
          "commission": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "$ref": "#/components/schemas/Amount"
          },
          "holidayAllowance": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "$ref": "#/components/schemas/Amount"
          },
          "grossYearlyIncomeVariable": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "overtimePay": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "$ref": "#/components/schemas/Amount"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[holidayAllowance]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[holidayAllowance]."
      },
      "EndDateInfo": {
        "type": "object",
        "properties": {
          "maxEndDate": {
            "type": "string",
            "format": "date"
          },
          "interestEndDate": {
            "type": "string",
            "format": "date"
          },
          "expectedEndDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "EndUser": {
        "required": [
          "accountName",
          "inetAddress",
          "userAgent"
        ],
        "type": "object",
        "properties": {
          "inetAddress": {
            "type": "string"
          },
          "accountName": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          },
          "roles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "userAgent": {
            "type": "string"
          }
        }
      },
      "Entity": {
        "type": "object",
        "properties": {
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "EntitySummary": {
        "type": "object",
        "properties": {
          "entityId": {
            "type": "string"
          }
        }
      },
      "EntityWithLinks": {
        "type": "object",
        "properties": {
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          }
        }
      },
      "Environment": {
        "type": "object",
        "properties": {
          "isSoilContaminated": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "isSuspicionOfAsbestos": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          }
        }
      },
      "ExpandableStructure": {
        "type": "object",
        "properties": {
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ExpandableStructureSummary": {
        "type": "object",
        "properties": {
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ExpandableStructureWithExternalReference": {
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ExpandableStructureWithPagination": {
        "type": "object",
        "properties": {
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ExpansionPath": {
        "type": "object",
        "properties": {
          "product": {
            "$ref": "#/components/schemas/ProductFamilyType"
          },
          "loanLifeCycleType": {
            "$ref": "#/components/schemas/LoanLifeCycleType"
          },
          "paths": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "Expense": {
        "description": "Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[frequency]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[startDate].",
        "allOf": [
          {
            "$ref": "#/components/schemas/PartyFinancial"
          },
          {
            "required": [
              "expenseAmounts"
            ],
            "type": "object",
            "properties": {
              "expenseResolutionType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/ExpenseResolutionType"
              },
              "loanRef": {
                "type": "string",
                "description": "ElementRef for field [relatedLoan]."
              },
              "relatedLoan": {
                "description": "Expandable using [expenseRelatedLoan].",
                "$ref": "#/components/schemas/RelatedLoan"
              },
              "expenseAmounts": {
                "maxItems": 1,
                "minItems": 1,
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ExpenseAmount"
                }
              }
            }
          }
        ]
      },
      "ExpenseAmount": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[amountGross]. When field=[expenseAmountType] has value/s=[REVOLVING_CREDIT] then field/s=[creditLimit] is/are required",
        "allOf": [
          {
            "$ref": "#/components/schemas/PartyFinancialAmount"
          },
          {
            "required": [
              "expenseAmountType"
            ],
            "type": "object",
            "properties": {
              "expenseAmountType": {
                "$ref": "#/components/schemas/ExpenseAmountType"
              },
              "creditLimit": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "remainingPrincipalAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "originalPrincipalAmount": {
                "minimum": 0,
                "type": "number",
                "description": "For frequency=[ONE_TIME] should be the same as amountGross Is formatted as currency.",
                "format": "double",
                "deprecated": false
              }
            }
          }
        ]
      },
      "ExpenseAmountType": {
        "type": "string",
        "enum": [
          "BANK_ACCOUNT_WITH_CREDIT",
          "CHILD_ALIMONY",
          "PARTNER_ALIMONY",
          "PENSION_PREMIUM",
          "NON_REVOLVING_CREDIT",
          "REVOLVING_CREDIT",
          "EXISTING_MORTGAGE",
          "EMPLOYER_LOAN",
          "MAIL_ORDER_CREDIT",
          "DEBT_SETTLEMENT",
          "TELECOM",
          "RENT",
          "STUDENT_LOAN",
          "STUDENT_LOAN_2015",
          "OPERATIONAL_CARLEASE",
          "RESIDUAL_DEBT_WITHOUT_NHG",
          "RESIDUAL_DEBT_WITH_NHG",
          "CURRENT_ACCOUNT",
          "HOUSING_COSTS",
          "ALIMONY",
          "PAYMENT_PLAN",
          "OTHER"
        ]
      },
      "ExpenseCalculationResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object",
            "properties": {
              "calculationFactor": {
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              },
              "grossAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "frequency": {
                "$ref": "#/components/schemas/PeriodLength"
              }
            }
          }
        ]
      },
      "ExpenseResolutionType": {
        "type": "string",
        "enum": [
          "RESOLVE_BY_LOAN_DISBURSEMENT",
          "RESOLVED_BEFORE_EFFECTIVE_DATE"
        ]
      },
      "Explain": {
        "required": [
          "code"
        ],
        "type": "object",
        "properties": {
          "contractor": {
            "description": "Expandable using [explainContractor].",
            "$ref": "#/components/schemas/Contractor"
          },
          "code": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/ExplainCode"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "contractorRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [contractor]."
          },
          "clarification": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "entityRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [entity]."
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ExplainCode": {
        "type": "string",
        "enum": [
          "INCOME_INCREASE_SALARY_RAISE",
          "INCOME_INCREASE_NEW_EMPLOYMENT"
        ]
      },
      "ExternallyReferableEntity": {
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ExternallyReferableEntitySummary": {
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "ExternallyReferableEntityWithLinks": {
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          }
        }
      },
      "ExtraCosts": {
        "type": "object",
        "properties": {
          "interestLoss": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "extraWork": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "constructionInterestAmount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "rebuildingCosts": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "deferredMaintenanceCosts": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "energySavingFacilitiesAmount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "maintenanceFundAmount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "FieldFilter": {
        "required": [
          "namedField"
        ],
        "type": "object",
        "properties": {
          "afterOrOn": {
            "type": "string",
            "format": "date"
          },
          "namedField": {
            "$ref": "#/components/schemas/FieldFilterType"
          },
          "beforeTime": {
            "type": "string",
            "format": "date"
          },
          "in": {
            "type": "string"
          },
          "before": {
            "type": "string",
            "format": "date"
          },
          "beforeOrOn": {
            "type": "string",
            "format": "date"
          },
          "afterTime": {
            "type": "string",
            "format": "date"
          },
          "is": {
            "type": "boolean"
          },
          "lessThanOrEquals": {
            "type": "number",
            "format": "double"
          },
          "matches": {
            "type": "string"
          },
          "greaterThanOrEquals": {
            "type": "number",
            "format": "double"
          },
          "contains": {
            "type": "string"
          },
          "onTime": {
            "type": "string",
            "format": "date"
          },
          "lessThan": {
            "type": "number",
            "format": "double"
          },
          "equals": {
            "type": "number",
            "format": "double"
          },
          "notMatches": {
            "type": "string"
          },
          "notIn": {
            "type": "string"
          },
          "after": {
            "type": "string",
            "format": "date"
          },
          "startsWith": {
            "type": "string"
          },
          "greaterThan": {
            "type": "number",
            "format": "double"
          },
          "on": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "FieldFilterType": {
        "type": "string",
        "enum": [
          "DOSSIER_UID",
          "CREATED_DATE",
          "LAST_MODIFIED_DATE",
          "DOSSIER_NR",
          "DOSSIER_PHASE",
          "DOSSIER_STATUS",
          "DOSSIER_HANDLING",
          "DOSSIER_LOCKED",
          "DOSSIER_LOCK_TIMESTAMP",
          "DOSSIER_LOCK_ACCOUNT_NAME",
          "APPLICATION_LABEL_CODE",
          "APPLICATION_LABEL_NAME",
          "APPLICATION_SOURCE_SYSTEM_REFERENCE",
          "APPLICATION_TYPE",
          "CUSTOMER_TYPE",
          "PROPOSAL_DATE",
          "STIPULATION_STATUS",
          "VALIDATION_DATE",
          "INTERMEDIARY_NAME",
          "APPLICANT_NAME",
          "ADDRESS",
          "MARKET_VALUE",
          "TOTAL_AMOUNT",
          "APPLICATION_DATE",
          "TRANSFER_DATE",
          "MORTGAGE_TRANSFER_DATE",
          "NHG",
          "UNLOCKED_OR_LOCKED_BY_USER"
        ]
      },
      "FilterOperationType": {
        "type": "string",
        "enum": [
          "AND",
          "OR"
        ]
      },
      "FilterResponse": {
        "type": "object",
        "properties": {
          "filterableParams": {
            "type": "object"
          }
        }
      },
      "FinancialContractStatus": {
        "type": "string",
        "enum": [
          "ORIGINATION",
          "SERVICING",
          "COLLECTION",
          "TRANSFER",
          "ORIENTATION"
        ]
      },
      "FinancialProductType": {
        "type": "string",
        "enum": [
          "PERSONAL_LOAN",
          "REVOLVING_CREDIT"
        ]
      },
      "FinancialSituation": {
        "type": "object",
        "properties": {
          "incomeStatementBusiness": {
            "$ref": "#/components/schemas/IncomeStatementBusiness"
          },
          "incomeStatementEmployment": {
            "$ref": "#/components/schemas/IncomeStatementEmployment"
          }
        }
      },
      "FlexWork": {
        "required": [
          "flexWorkYears"
        ],
        "type": "object",
        "properties": {
          "averageYearlyIncome": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "flexWorkYears": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "items": {
              "$ref": "#/components/schemas/FlexWorkYear"
            }
          }
        }
      },
      "FlexWorkYear": {
        "required": [
          "income",
          "year"
        ],
        "type": "object",
        "properties": {
          "income": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "$ref": "#/components/schemas/Amount"
          },
          "year": {
            "minimum": 0,
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "format": "int32"
          },
          "equity": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "FreeCondition": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MutationCondition"
          },
          {
            "required": [
              "condition"
            ],
            "type": "object",
            "properties": {
              "condition": {
                "type": "string"
              }
            }
          }
        ]
      },
      "FreeField": {
        "type": "object",
        "properties": {
          "dateValue": {
            "type": "string",
            "format": "date"
          },
          "listItemValue": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "dateTimeValue": {
            "type": "string",
            "format": "date-time"
          },
          "textValue": {
            "type": "string"
          },
          "decimalValue": {
            "type": "number",
            "format": "double"
          },
          "booleanValue": {
            "type": "boolean"
          },
          "integerValue": {
            "type": "integer",
            "format": "int32"
          },
          "entityRef": {
            "type": "string"
          }
        }
      },
      "FreeFieldConfig": {
        "type": "object",
        "properties": {
          "freeFieldConfigItems": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldConfigItem"
            }
          }
        }
      },
      "FreeFieldConfigItem": {
        "type": "object",
        "properties": {
          "regexp": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "dataType": {
            "$ref": "#/components/schemas/FreeFieldDataType"
          },
          "name": {
            "type": "string"
          },
          "freeFieldListItems": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldListItem"
            }
          },
          "relevantEntityTypes": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "required": {
            "type": "boolean"
          }
        }
      },
      "FreeFieldContainer": {
        "type": "object",
        "properties": {
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          }
        }
      },
      "FreeFieldDataType": {
        "type": "string",
        "enum": [
          "LIST_ITEM",
          "BOOLEAN",
          "DECIMAL",
          "INTEGER",
          "DATE",
          "DATE_TIME",
          "TEXT"
        ]
      },
      "FreeFieldGenericWrapper": {
        "type": "object",
        "properties": {
          "freeFieldValue": {
            "$ref": "#/components/schemas/FreeFieldValue"
          },
          "entityRef": {
            "type": "string"
          }
        }
      },
      "FreeFieldListItem": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        }
      },
      "FreeFieldValidationError": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "entityId": {
            "type": "string"
          },
          "message": {
            "type": "string"
          },
          "entity": {
            "type": "string"
          }
        }
      },
      "FreeFieldValidationErrorMessage": {
        "type": "object",
        "properties": {
          "freeFieldValidationErrors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValidationError"
            }
          }
        }
      },
      "FreeFieldValue": {
        "required": [
          "code"
        ],
        "type": "object",
        "properties": {
          "dateValue": {
            "type": "string",
            "format": "date"
          },
          "listItemValue": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "dateTimeValue": {
            "type": "string",
            "format": "date-time"
          },
          "textValue": {
            "type": "string"
          },
          "decimalValue": {
            "type": "number",
            "format": "double"
          },
          "entityId": {
            "type": "string"
          },
          "booleanValue": {
            "type": "boolean"
          },
          "integerValue": {
            "type": "integer",
            "format": "int32"
          },
          "eTag": {
            "type": "string"
          }
        }
      },
      "FullPayment": {
        "type": "object",
        "properties": {
          "redemptionSources": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "keyTotal": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "regularLoans": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "redemptionSourcesCorrected": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "Fund": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[action, duration, termLength]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI, LTV] are=[duration, termLength]. Required fields for products=[CONSUMER_LOAN] are=[action, duration, termLength]. Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[duration, termLength].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Contract"
          },
          {
            "required": [
              "interestCalculationDay",
              "type"
            ],
            "type": "object",
            "properties": {
              "interestRate": {
                "minimum": 0.0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "endDateInfo": {
                "$ref": "#/components/schemas/EndDateInfo"
              },
              "loanPartReferences": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "remainingPrincipal": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/Amount"
              },
              "nextInterestCalculationDate": {
                "type": "string",
                "format": "date"
              },
              "interestRateSelectionDate": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "date"
              },
              "interestAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "variability": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/Variability"
              },
              "isExtended": {
                "type": "boolean"
              },
              "type": {
                "type": "string"
              },
              "nominalYearlyInterestRate": {
                "minimum": 0.0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "interestCalculationDay": {
                "type": "integer",
                "format": "int32"
              },
              "principal": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/Amount"
              },
              "providerRef": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [provider]."
              },
              "provider": {
                "description": "Expandable using [constructionFundProvider].",
                "$ref": "#/components/schemas/Organization"
              },
              "previousInterestCalculationDate": {
                "type": "string",
                "format": "date"
              },
              "startDate": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "date"
              },
              "status": {
                "$ref": "#/components/schemas/ConstructionFundStatus"
              }
            },
            "discriminator": {
              "propertyName": "type",
              "mapping": {
                "dueDateFund": "DueDateFund",
                "constructionFund": "ConstructionFund"
              }
            }
          }
        ]
      },
      "Funder": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Party"
          },
          {
            "type": "object",
            "properties": {
              "weakEtag": {
                "type": "string"
              },
              "code": {
                "type": "string"
              },
              "description": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              }
            }
          }
        ]
      },
      "FutureFullPayment": {
        "type": "object",
        "properties": {
          "redemptionSources": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "keyTotal": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "regularLoans": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "FutureRemainingPrincipal": {
        "type": "object",
        "properties": {
          "redemptionSources": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "regularLoans": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "Gender": {
        "type": "string",
        "enum": [
          "MALE",
          "FEMALE"
        ]
      },
      "GetAssetsResponse": {
        "type": "object",
        "properties": {
          "assets": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "realEstateSubUnit": "RealEstateSubUnit",
                  "additionalRealEstate": "AdditionalRealEstate",
                  "realEstate": "RealEstate"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/RealEstateSubUnit"
                },
                {
                  "$ref": "#/components/schemas/AdditionalRealEstate"
                },
                {
                  "$ref": "#/components/schemas/RealEstate"
                }
              ]
            }
          },
          "filterableParams": {
            "type": "object"
          }
        }
      },
      "GetBorrowersResponse": {
        "type": "object",
        "properties": {
          "contractors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Contractor"
            }
          }
        }
      },
      "GetConsumerLoansResponse": {
        "type": "object",
        "properties": {
          "consumerLoans": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ConsumerLoan"
            }
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          }
        }
      },
      "GetContractorsResponse": {
        "type": "object",
        "properties": {
          "contractors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Contractor"
            }
          }
        }
      },
      "GetContractsResponse": {
        "type": "object",
        "properties": {
          "contracts": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "mortgageLoan": "MortgageLoan",
                  "fund": "Fund",
                  "consumerLoan": "ConsumerLoan",
                  "loanPart": "LoanPart"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Fund"
                },
                {
                  "$ref": "#/components/schemas/LoanPart"
                },
                {
                  "$ref": "#/components/schemas/MortgageLoan"
                },
                {
                  "$ref": "#/components/schemas/ConsumerLoan"
                }
              ]
            }
          }
        }
      },
      "GetDeclarationResult": {
        "required": [
          "success"
        ],
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "errorMessage": {
            "type": "string"
          },
          "etag": {
            "type": "string"
          },
          "declaration": {
            "$ref": "#/components/schemas/Declaration"
          }
        }
      },
      "GetDeclarationsResult": {
        "required": [
          "success"
        ],
        "type": "object",
        "properties": {
          "success": {
            "type": "boolean"
          },
          "errorMessage": {
            "type": "string"
          },
          "declarations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Declaration"
            }
          }
        }
      },
      "GetDossierMetadataResponse": {
        "type": "object",
        "properties": {
          "metadata": {
            "$ref": "#/components/schemas/Metadata"
          },
          "application": {
            "$ref": "#/components/schemas/CraApplication"
          },
          "dossierUid": {
            "type": "string"
          }
        }
      },
      "GetDossierSummariesResponse": {
        "type": "object",
        "properties": {
          "totalSize": {
            "type": "integer",
            "format": "int32"
          },
          "offset": {
            "type": "integer",
            "format": "int32"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "dossierSummaries": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DossierSummary"
            }
          }
        }
      },
      "GetFreeFieldValuesResponse": {
        "type": "object",
        "properties": {
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          }
        }
      },
      "GetFundersResponse": {
        "type": "object",
        "properties": {
          "funders": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Funder"
            }
          }
        }
      },
      "GetLegalPersonsResponse": {
        "type": "object",
        "properties": {
          "legalPersons": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "person": "Person",
                  "calculationPerson": "CalculationPerson",
                  "organization": "Organization"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/CalculationPerson"
                },
                {
                  "$ref": "#/components/schemas/Organization"
                },
                {
                  "$ref": "#/components/schemas/Person"
                }
              ]
            }
          }
        }
      },
      "GetMortgageLoansResponse": {
        "type": "object",
        "properties": {
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "mortgageLoans": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MortgageLoan"
            }
          }
        }
      },
      "GetMortgageRegistrationsResponse": {
        "type": "object",
        "properties": {
          "mortgageRegistrations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MortgageRegistration"
            }
          }
        }
      },
      "GetNotariesResponse": {
        "type": "object",
        "properties": {
          "notaries": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Notary"
            }
          }
        }
      },
      "GetPartiesResponse": {
        "type": "object",
        "properties": {
          "parties": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "funder": "Funder",
                  "contractor": "Contractor",
                  "notary": "Notary",
                  "guarantor": "Guarantor",
                  "calculationContractor": "CalculationContractor",
                  "intermediary": "Intermediary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Intermediary"
                },
                {
                  "$ref": "#/components/schemas/Contractor"
                },
                {
                  "$ref": "#/components/schemas/Funder"
                },
                {
                  "$ref": "#/components/schemas/Guarantor"
                },
                {
                  "$ref": "#/components/schemas/Notary"
                },
                {
                  "$ref": "#/components/schemas/CalculationContractor"
                }
              ]
            }
          }
        }
      },
      "GetProductsResponse": {
        "type": "object",
        "properties": {
          "products": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InterestProduct"
            }
          }
        }
      },
      "GetRelatedContractsResponse": {
        "type": "object",
        "properties": {
          "relatedContracts": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "relatedLoan": "RelatedLoan",
                  "relatedInsurance": "RelatedInsurance"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/RelatedLoan"
                },
                {
                  "$ref": "#/components/schemas/RelatedInsurance"
                }
              ]
            }
          }
        }
      },
      "GetRelatedDocumentsResponse": {
        "type": "object",
        "properties": {
          "documents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RelatedDocument"
            }
          }
        }
      },
      "GetRelatedLoansResponse": {
        "type": "object",
        "properties": {
          "relatedLoans": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RelatedLoan"
            }
          }
        }
      },
      "GetStipulationsResponse": {
        "type": "object",
        "properties": {
          "stipulations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Stipulation"
            }
          }
        }
      },
      "GetSubsidiesResponse": {
        "type": "object",
        "properties": {
          "subsidies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Subsidy"
            }
          }
        }
      },
      "GlobalUniqueEntity": {
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "GroundRent": {
        "type": "object",
        "properties": {
          "annualFee": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "Guarantee": {
        "description": "Expansion wildcards=[collateral*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Collateral"
          },
          {
            "type": "object",
            "properties": {
              "guarantorRefs": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [guarantors].",
                "items": {
                  "type": "string"
                }
              },
              "guarantors": {
                "type": "array",
                "description": "Expandable using [collateralGuarantors].",
                "items": {
                  "$ref": "#/components/schemas/Guarantor"
                }
              }
            }
          }
        ]
      },
      "GuaranteeType": {
        "type": "string",
        "enum": [
          "NHG",
          "GG",
          "FULL_GUARANTEE",
          "PARTIAL_GUARANTEE",
          "FAKE_NHG",
          "NO_GUARANTEE"
        ]
      },
      "Guarantor": {
        "description": "Expansion wildcards=[party*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Party"
          },
          {
            "required": [
              "deviatesFromProfile",
              "incomes",
              "severalLiability"
            ],
            "type": "object",
            "properties": {
              "incomes": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "items": {
                  "discriminator": {
                    "propertyName": "type",
                    "mapping": {
                      "otherIncome": "OtherIncome",
                      "socialBenefitIncome": "SocialBenefitIncome",
                      "independentIncome": "IndependentIncome",
                      "rentalIncome": "RentalIncome",
                      "employmentIncome": "EmploymentIncome",
                      "pensionIncome": "PensionIncome",
                      "substantialInterestIncome": "SubstantialInterestIncome",
                      "capitalIncome": "CapitalIncome"
                    }
                  },
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/SubstantialInterestIncome"
                    },
                    {
                      "$ref": "#/components/schemas/SocialBenefitIncome"
                    },
                    {
                      "$ref": "#/components/schemas/IndependentIncome"
                    },
                    {
                      "$ref": "#/components/schemas/EmploymentIncome"
                    },
                    {
                      "$ref": "#/components/schemas/OtherIncome"
                    },
                    {
                      "$ref": "#/components/schemas/CapitalIncome"
                    },
                    {
                      "$ref": "#/components/schemas/PensionIncome"
                    },
                    {
                      "$ref": "#/components/schemas/RentalIncome"
                    }
                  ]
                }
              },
              "severalLiability": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "deviatesFromProfile": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "expenses": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "items": {
                  "$ref": "#/components/schemas/Expense"
                }
              }
            }
          }
        ]
      },
      "Household": {
        "required": [
          "maritalStateType",
          "monthlyHousingCosts",
          "numberOfChildren",
          "residenceSituationType"
        ],
        "type": "object",
        "properties": {
          "residenceSituationType": {
            "$ref": "#/components/schemas/ResidenceSituationType"
          },
          "numberOfChildren": {
            "type": "integer",
            "format": "int32"
          },
          "monthlyHousingCosts": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "maritalStateType": {
            "$ref": "#/components/schemas/MaritalStateType"
          }
        }
      },
      "HouseholdCalculationResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object"
          }
        ]
      },
      "Income": {
        "description": "Required fields for products=[CONSUMER_LOAN] are=[providerRef]. Required fields for products=[MORTGAGE_LOAN] are=[providerRef].",
        "allOf": [
          {
            "$ref": "#/components/schemas/PartyFinancial"
          },
          {
            "required": [
              "type"
            ],
            "type": "object",
            "properties": {
              "calculationFactor": {
                "maximum": 100,
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "providerRef": {
                "type": "string",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN]. ElementRef for field [provider]."
              },
              "provider": {
                "description": "Expandable using [incomeProvider].",
                "$ref": "#/components/schemas/Organization"
              },
              "keyIncome": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Is formatted as currency.",
                "format": "double"
              },
              "type": {
                "type": "string"
              }
            },
            "discriminator": {
              "propertyName": "type",
              "mapping": {
                "otherIncome": "OtherIncome",
                "socialBenefitIncome": "SocialBenefitIncome",
                "independentIncome": "IndependentIncome",
                "rentalIncome": "RentalIncome",
                "employmentIncome": "EmploymentIncome",
                "pensionIncome": "PensionIncome",
                "substantialInterestIncome": "SubstantialInterestIncome",
                "capitalIncome": "CapitalIncome"
              }
            }
          }
        ]
      },
      "IncomeAmount": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[amountGross].",
        "allOf": [
          {
            "$ref": "#/components/schemas/PartyFinancialAmount"
          },
          {
            "required": [
              "incomeAmountType"
            ],
            "type": "object",
            "properties": {
              "incomeAmountType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI].",
                "$ref": "#/components/schemas/IncomeAmountType"
              },
              "amountNet": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
                "format": "double"
              }
            }
          }
        ]
      },
      "IncomeAmountType": {
        "type": "string",
        "enum": [
          "SALARY",
          "CAPITAL",
          "PENSION",
          "SOCIAL_BENEFIT",
          "OTHER"
        ]
      },
      "IncomeCalculationResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object",
            "properties": {
              "calculationFactor": {
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              },
              "netAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "grossAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "frequency": {
                "$ref": "#/components/schemas/PeriodLength"
              }
            }
          }
        ]
      },
      "IncomeStatement": {
        "required": [
          "keyIncome"
        ],
        "type": "object",
        "properties": {
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "keyIncome": {
            "minimum": 0.0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "IncomeStatementBusiness": {
        "required": [
          "numberOfCompanies",
          "keyIncome"
        ],
        "type": "object",
        "properties": {
          "numberOfCompanies": {
            "minimum": 0,
            "type": "integer",
            "format": "int32"
          },
          "dossierNumberIncomeStatement": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "keyIncome": {
            "minimum": 0.0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "IncomeStatementEmployment": {
        "required": [
          "numberOfEmployments",
          "pensionContributionTotal",
          "keyIncome"
        ],
        "type": "object",
        "properties": {
          "pensionContributionTotal": {
            "minimum": 0.0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "numberOfEmployments": {
            "minimum": 0,
            "type": "integer",
            "format": "int32"
          },
          "keyIncome": {
            "minimum": 0.0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "IndependentIncome": {
        "description": "Required fields for products=[CONSUMER_LOAN] are=[providerRef]. Required fields for products=[MORTGAGE_LOAN] are=[providerRef].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Income"
          },
          {
            "required": [
              "legalFormType",
              "selfEmploymentType"
            ],
            "type": "object",
            "properties": {
              "workYears": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "items": {
                  "$ref": "#/components/schemas/FlexWorkYear"
                }
              },
              "businessName": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "sbiCode": {
                "maxLength": 50,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "shareInEnterprise": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "realizedIncomes": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "items": {
                  "$ref": "#/components/schemas/RealizedIncome"
                }
              },
              "chamberOfCommerceBranchNr": {
                "maxLength": 20,
                "minLength": 1,
                "pattern": "(\\d{12})",
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "chamberOfCommerceNr": {
                "maxLength": 20,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "prognosisCurrentYear": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "rsin": {
                "type": "integer",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "int32"
              },
              "includedInIncomeStatement": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "legalFormType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
                "$ref": "#/components/schemas/LegalFormType"
              },
              "selfEmploymentType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/SelfEmploymentType"
              },
              "dga": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]."
              }
            }
          }
        ]
      },
      "InsuranceType": {
        "type": "string",
        "enum": [
          "TERM_LIFE_INSURANCE",
          "LIFE_INSURANCE",
          "DISABILITY_INSURANCE",
          "UNEMPLOYMENT_INSURANCE",
          "OTHER"
        ]
      },
      "InterestCalculationType": {
        "type": "string",
        "enum": [
          "ACTUAL_THREESIXTYFIVE_REAL",
          "THIRTY_THREESIXTY_REAL",
          "ACTUAL_THREESIXTYFIVE_NOMINAL",
          "THIRTY_THREESIXTY_NOMINAL"
        ]
      },
      "InterestOnlyPayment": {
        "type": "object",
        "properties": {
          "redemptionSources": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "keyTotal": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "regularLoans": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "redemptionSourcesCorrected": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "InterestProduct": {
        "type": "object",
        "properties": {
          "label": {
            "$ref": "#/components/schemas/Label"
          },
          "productName": {
            "type": "string"
          }
        }
      },
      "InterestRateRevision": {
        "required": [
          "interestRateRevisionItems",
          "referenceDate"
        ],
        "type": "object",
        "properties": {
          "mutationType": {
            "$ref": "#/components/schemas/MutationType"
          },
          "interestRateRevisionItems": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InterestRateRevisionItem"
            }
          },
          "referenceDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "InterestRateRevisionItem": {
        "required": [
          "amortizationVersion",
          "mutationTypes"
        ],
        "type": "object",
        "properties": {
          "amortizationVersion": {
            "$ref": "#/components/schemas/AmortizationVersion"
          },
          "mutationTypes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MutationType"
            }
          }
        }
      },
      "InterestRateRevisionResponse": {
        "required": [
          "interestRateRevisions"
        ],
        "type": "object",
        "properties": {
          "interestRateRevisions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InterestRateRevision"
            }
          }
        }
      },
      "InterestTable": {
        "type": "object",
        "properties": {
          "columns": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Column"
            }
          },
          "rows": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Row"
            }
          },
          "startDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "InterestVariability": {
        "type": "object",
        "properties": {
          "durationInMonths": {
            "type": "integer",
            "format": "int64"
          },
          "interestVariabilityType": {
            "$ref": "#/components/schemas/InterestVariabilityType"
          }
        }
      },
      "InterestVariabilityType": {
        "type": "string",
        "enum": [
          "FIXED",
          "VARIABLE",
          "RATE_REVISION"
        ]
      },
      "Intermediary": {
        "description": "Expansion wildcards=[party*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Party"
          },
          {
            "required": [
              "intermediaryNumber"
            ],
            "type": "object",
            "properties": {
              "chamberOfCommerceNr": {
                "maxLength": 50,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[CONSUMER_LOAN]."
              },
              "intermediaryNumber": {
                "maxLength": 50,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "intermediaryType": {
                "$ref": "#/components/schemas/IntermediaryType"
              },
              "afmRegistrationNr": {
                "maxLength": 50,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              }
            }
          }
        ]
      },
      "IntermediarySummary": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PartySummary"
          },
          {
            "type": "object",
            "properties": {
              "intermediaryNumber": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "chamberOfCommerceNumber": {
                "type": "string"
              }
            }
          }
        ]
      },
      "IntermediaryType": {
        "type": "string",
        "enum": [
          "FIRST_INTERMEDIARY",
          "SECOND_INTERMEDIARY"
        ]
      },
      "JsonPatch": {
        "type": "object",
        "properties": {
          "op": {
            "$ref": "#/components/schemas/Operation"
          },
          "path": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        }
      },
      "KycReport": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Report"
          },
          {
            "required": [
              "type"
            ],
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              }
            },
            "discriminator": {
              "propertyName": "type",
              "mapping": {
                "customerDueDiligenceReport": "CustomerDueDiligenceReport"
              }
            }
          }
        ]
      },
      "Label": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "LabelCode": {
        "required": [
          "code"
        ],
        "type": "object",
        "properties": {
          "number": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "longName": {
            "type": "string"
          }
        }
      },
      "LabelledCalculationBase": {
        "required": [
          "label"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION].",
            "format": "date"
          },
          "label": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS, LOAN_DURATION]."
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[PAYMENT_TERMS, LOAN_DURATION] are=[date]."
      },
      "LandRegistration": {
        "required": [
          "municipality",
          "section"
        ],
        "type": "object",
        "properties": {
          "area": {
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "int64"
          },
          "number": {
            "minimum": 1,
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "int32"
          },
          "lastTransactionDate": {
            "type": "string",
            "format": "date"
          },
          "zoning": {
            "$ref": "#/components/schemas/ZoningType"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "municipality": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "apartmentComplexType": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "section": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "apartmentNumber": {
            "maxLength": 10,
            "minLength": 1,
            "type": "string"
          }
        }
      },
      "LeaseHold": {
        "type": "object",
        "properties": {
          "redemptionAmount": {
            "type": "number",
            "description": "CalculationTypes=[LTI, LTV]. Is formatted as currency.",
            "format": "double"
          },
          "lessorType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/LessorType"
          },
          "redemption": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/LeaseHoldRedemption"
          },
          "endDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "indefiniteDuration": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "groundRent": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/GroundRent"
          },
          "startDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          }
        }
      },
      "LeaseHoldRedemption": {
        "type": "object",
        "properties": {
          "redemptionPeriodType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/LeaseHoldRedemptionPeriodType"
          },
          "amountToFinance": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "redeemedUntil": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "amountTotal": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "redeemedInPast": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "finance": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          }
        }
      },
      "LeaseHoldRedemptionPeriodType": {
        "type": "string",
        "enum": [
          "INDEFINITE_DURATION",
          "DEFINITE_DURATION"
        ]
      },
      "LeewayAvailable": {
        "type": "object",
        "properties": {
          "redemptionSources": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "factualPaymentRedemptionSourceLoan": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "regularLoans": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "factualPayment": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "factualPaymentRegularLoan": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "LegalFormType": {
        "type": "string",
        "enum": [
          "SOLE_PROPRIETORSHIP",
          "PROFESSIONAL_PARTNERSHIP",
          "GENERAL_PARTNERSHIP",
          "LIMITED_PARTNERSHIP",
          "COOPERATIVE",
          "PRIVATE_LIMITED_COMPANY",
          "ESTABLISHED_COMPANY",
          "PUBLIC_LIMITED_COMPANY",
          "ASSOCIATION",
          "FOUNDATION",
          "GOVERNMENT",
          "FOREIGN_LEGAL_FORM",
          "OWNERS_ASSOCIATION",
          "DENOMINATION",
          "VOF",
          "CV",
          "NV",
          "BA",
          "UA",
          "WA",
          "MUTUAL_ASSOCIATION",
          "BV",
          "PARTNERSHIP",
          "COOPERATIVE_WITH_LIMITED_LIABILITY",
          "COOPERATIVE_WITH_NO_LIABILITY",
          "COOPERATIVE_WITH_LEGAL_LIABILITY",
          "MUTAL_GUARANTEE_COMPANY",
          "PRIVATE_COMANY_IN_DEVELOPMENT",
          "OTHER"
        ]
      },
      "LegalPerson": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "bankAccounts": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]. ElementRef for field [bankAccountInstances].",
            "items": {
              "type": "string"
            }
          },
          "entityId": {
            "type": "string"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          },
          "contactDetails": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]. Expandable using [contactDetails].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "address": "Address",
                  "phone": "Phone",
                  "email": "Email"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Email"
                },
                {
                  "$ref": "#/components/schemas/Address"
                },
                {
                  "$ref": "#/components/schemas/Phone"
                }
              ]
            }
          },
          "orgRelId": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "externalReference": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "bankAccountInstances": {
            "type": "array",
            "description": "Expandable using [bankAccounts].",
            "items": {
              "$ref": "#/components/schemas/BankAccount"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          }
        },
        "description": "Expansion wildcards=[legalPerson*]",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "person": "Person",
            "calculationPerson": "CalculationPerson",
            "organization": "Organization"
          }
        }
      },
      "LegalPersonSummary": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          },
          "contactDetails": {
            "type": "array",
            "description": "Relevant for products=[CONSUMER_LOAN]. Expandable using [legalPersonSummaryContactDetails].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "address": "Address",
                  "phone": "Phone",
                  "email": "Email"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Email"
                },
                {
                  "$ref": "#/components/schemas/Address"
                },
                {
                  "$ref": "#/components/schemas/Phone"
                }
              ]
            }
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "organizationSummary": "OrganizationSummary",
            "personSummary": "PersonSummary"
          }
        }
      },
      "LessorType": {
        "type": "string",
        "enum": [
          "SEMI_GOVERNMENT",
          "MUNICIPALITY",
          "PROVINCE",
          "WATER_BOARD",
          "PRIVATE_PERSON",
          "OTHER"
        ]
      },
      "LifeInsuranceValue": {
        "type": "object",
        "properties": {
          "secondInsured": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "firstInsured": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "ListItemsResponse": {
        "type": "object",
        "properties": {
          "listItems": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldListItem"
            }
          }
        }
      },
      "Loan": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[interestRate].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Contract"
          },
          {
            "required": [
              "type"
            ],
            "type": "object",
            "properties": {
              "interestRate": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "collectionMethod": {
                "description": "Relevant for products=[CONSUMER_LOAN].",
                "$ref": "#/components/schemas/LoanCollectionMethod"
              },
              "collectionDay": {
                "maximum": 31,
                "minimum": 1,
                "type": "integer",
                "description": "Relevant for products=[CONSUMER_LOAN].",
                "format": "int32"
              },
              "remainingPrincipal": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "loanActionReason": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/LoanActionReason"
              },
              "loanPurpose": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "type": {
                "type": "string"
              },
              "loanAction": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/LoanAction"
              }
            },
            "discriminator": {
              "propertyName": "type",
              "mapping": {
                "mortgageLoan": "MortgageLoan",
                "consumerLoan": "ConsumerLoan",
                "bridgeLoan": "BridgeLoan",
                "loanPart": "LoanPart"
              }
            }
          }
        ]
      },
      "LoanAction": {
        "type": "string",
        "enum": [
          "CREDIT_INCREASE"
        ]
      },
      "LoanActionReason": {
        "type": "string",
        "enum": [
          "SUCCESSION",
          "QUALITY_IMPROVEMENT",
          "END_OF_RELATIONSHIP",
          "LEASEHOLD_BUYOFF",
          "FULL_OWNERSHIP_OF_LAND",
          "GENERIC_CONTRACT_TRANSFER",
          "FINANCIAL_SITUATION_IMPROVEMENT"
        ]
      },
      "LoanCalculationResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object",
            "properties": {
              "nominalAnnualInterestRate": {
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              },
              "durationInMonths": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        ]
      },
      "LoanCollectionMethod": {
        "type": "string",
        "enum": [
          "DIRECT_DEBIT",
          "BANK_TRANSFER",
          "OTHER"
        ]
      },
      "LoanDurationRedemption": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LOAN_DURATION] are=[minimumTermPayments].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Amortization"
          },
          {
            "required": [
              "interval",
              "redemptionType"
            ],
            "type": "object",
            "properties": {
              "gracePeriodInMonths": {
                "minimum": 0,
                "type": "integer",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LOAN_DURATION].",
                "format": "int32"
              },
              "minimumTermPayments": {
                "maxItems": 2147483647,
                "minItems": 1,
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LOAN_DURATION].",
                "items": {
                  "$ref": "#/components/schemas/MinimumTermPayment"
                }
              },
              "redemptionType": {
                "description": "ONCE is usable only for CreateApplication MO ML",
                "$ref": "#/components/schemas/CalculationRedemptionType",
                "deprecated": false
              },
              "interval": {
                "description": "ONCE is usable only for CreateApplication MO ML",
                "$ref": "#/components/schemas/CalculationRedemptionInterval",
                "deprecated": false
              }
            }
          }
        ]
      },
      "LoanLifeCycleType": {
        "type": "string",
        "enum": [
          "ORIGINATION",
          "SERVICING"
        ]
      },
      "LoanPart": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[sequenceNumber, loanPartType, variability]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY] are=[duration, termLength, effectiveDate]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[variability]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[PAYMENT_TERMS] are=[entityId, nominalYearlyInterestRate, duration, termLength, redemptionInterval, amortization, principal]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[APR] are=[sequenceNumber, redemptionInterval, nominalYearlyInterestRate].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Loan"
          },
          {
            "required": [
              "principal"
            ],
            "type": "object",
            "properties": {
              "intermediaryRef": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "finalEffectiveYearlyInterestRate": {
                "maximum": 100,
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS]. Is formatted as percentage.",
                "format": "double"
              },
              "mandate": {
                "$ref": "#/components/schemas/Mandate"
              },
              "annualPercentageRate": {
                "maximum": 100,
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "funderRef": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "theoreticalEndDate": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "date"
              },
              "dueDate": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/DueDate"
              },
              "interestRateAfterCurrentFixedRatePeriod": {
                "maximum": 100,
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Is formatted as percentage.",
                "format": "double"
              },
              "amortization": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[PAYMENT_TERMS].",
                "discriminator": {
                  "propertyName": "type",
                  "mapping": {
                    "amortizationVersionRedemption": "AmortizationVersionRedemption",
                    "calculationPaymentTermsRedemption": "CalculationPaymentTermsRedemption",
                    "loanDurationRedemption": "LoanDurationRedemption",
                    "prepaymentSimulationRedemption": "PrepaymentSimulationRedemption"
                  }
                },
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/PrepaymentSimulationRedemption"
                  },
                  {
                    "$ref": "#/components/schemas/CalculationPaymentTermsRedemption"
                  },
                  {
                    "$ref": "#/components/schemas/LoanDurationRedemption"
                  },
                  {
                    "$ref": "#/components/schemas/AmortizationVersionRedemption"
                  }
                ]
              },
              "recovery": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/Recovery"
              },
              "variability": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/Variability"
              },
              "nominalYearlyInterestRate": {
                "maximum": 100,
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "principal": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].CalculationTypes=[LTI, LTV, ADDITIONAL_LOAN_PAYMENT_CAPACITY, PAYMENT_TERMS]. Is formatted as currency.",
                "format": "double"
              },
              "balances": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "items": {
                  "$ref": "#/components/schemas/Balance"
                }
              },
              "loanPartType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/LoanPartType"
              },
              "givenNominalYearlyInterestRate": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "judicialOwnerRef": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "sequenceNumber": {
                "type": "integer",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "int32"
              },
              "costs": {
                "type": "array",
                "description": "Expandable using [loanPartCosts].",
                "items": {
                  "$ref": "#/components/schemas/Cost"
                }
              },
              "redemptionType": {
                "description": "You can use this redemptionType or amortization.redemptionType if available for giver amortization.type. It is required to specify in one if these places. RedemptionType will be moved to amortization in future Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, LTV, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/RedemptionType",
                "deprecated": false
              },
              "finalNominalYearlyInterestRate": {
                "maximum": 100,
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS]. Is formatted as percentage.",
                "format": "double"
              },
              "generalConditions": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "interestRateSelectionDate": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "date"
              },
              "redemptionTerms": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]. Expandable using [loanPartRedemptionTerms].",
                "items": {
                  "$ref": "#/components/schemas/RedemptionTerm"
                }
              },
              "repaymentRate": {
                "maximum": 100,
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "subStatus": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/LoanPartSubStatusType"
              },
              "redemptionAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Is formatted as currency.",
                "format": "double"
              },
              "accountingStatus": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/AccountingStatus"
              },
              "baseInterestRate": {
                "maximum": 100,
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, LTV, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Is formatted as percentage.",
                "format": "double"
              },
              "nhgReports": {
                "type": "array",
                "description": "Expandable using [loanPartNhgReports].",
                "items": {
                  "$ref": "#/components/schemas/NHGReport"
                }
              },
              "consumerCreditAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "redemptionInterval": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/RedemptionInterval"
              },
              "status": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/LoanPartStatusType"
              }
            }
          }
        ]
      },
      "LoanPartApr": {
        "required": [
          "annualPercentageRate",
          "sequence"
        ],
        "type": "object",
        "properties": {
          "sequence": {
            "type": "integer",
            "format": "int32"
          },
          "annualPercentageRate": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "appliedCosts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Cost"
            }
          }
        }
      },
      "LoanPartStatusType": {
        "type": "string",
        "enum": [
          "NORMAL",
          "CREDIT_INSURER_PAID",
          "COLLECTIONS",
          "END_DURATION",
          "COMPLETE_PREPAYMENT",
          "CANCELLATION",
          "CDA",
          "ENDED",
          "COLLECTIONS_ANNOUNCED",
          "CALIBRATION",
          "OVERDRAW",
          "CREDIT_INSURER_UNPAID",
          "CANCELLATION_ANNOUNCED",
          "CANCELLATION_REMAINING_DUE",
          "CREDIT_INSURER_DISPUTE",
          "CREDIT_INSURER_OUTSIDE_POLICY",
          "PENDING",
          "OBSOLETE",
          "SPLIT"
        ]
      },
      "LoanPartSubStatusType": {
        "type": "string",
        "enum": [
          "NORMAL",
          "WRITTEN_OFF",
          "SOLD",
          "ACCOUNTING_COMPLETED_WITHOUT_LOSS",
          "ACCOUNTANCY_CLOSED_WITH_LOSS",
          "LEGALLY_CLOSED",
          "AWAITING_DELIVERY",
          "CREDIT_INSURER_UNPAID",
          "CREDIT_INSURER_PAID",
          "CD_AREQUESTED",
          "INITIATE_COLLECTIONS",
          "COMPLETE_PREPAYMENT",
          "TRANSFER_TO_CI_BEFORE_WRITE_OFF",
          "TRANSFER_TO_CI_AFTER_WRITE_OFF",
          "ACCOUNTING_WRITE_OFF",
          "IRRECOVEREABLE",
          "SPLIT"
        ]
      },
      "LoanPartType": {
        "type": "string",
        "enum": [
          "NEW",
          "EXISTING",
          "BRIDGE"
        ]
      },
      "LoanPurposeType": {
        "type": "string",
        "enum": [
          "NOT_SPECIFIED",
          "CAR",
          "BOAT",
          "TOURCARAVAN",
          "MOTOR",
          "HOME_IMPROVEMENTS",
          "BUSSINESS_PURPOSE",
          "DEBT_RESTRUCTURING",
          "ACQUISITION_OF_ACTIVE_LOANS",
          "PAY_TAXES",
          "BUY_HOUSE",
          "REST_DEBT_FINANCING",
          "FUNDING_COSTS_MORTGAGE",
          "HOUSEHOLD_APPLIANCES_OR_EFFECTS",
          "EXTRA_FINANCIAL_SPACE",
          "RECREATIONAL_OR_SECOND_HOUSE",
          "ADDITIONAL_HOUSING_COSTS",
          "DECOR_OF_HOME_GARDEN",
          "COMPUTER_ELECTRONICS_HOUSEHOLD_APPLIANCES",
          "EXTRA_MONEY_FOR_LATER",
          "OTHER"
        ]
      },
      "LoanSummary": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "product": {
            "$ref": "#/components/schemas/Product"
          },
          "loanType": {
            "$ref": "#/components/schemas/LoanType"
          },
          "contractNumber": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN]."
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "type": {
            "type": "string"
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "consumerLoanSummary": "ConsumerLoanSummary",
            "mortgageLoanSummary": "MortgageLoanSummary"
          }
        }
      },
      "LoanType": {
        "type": "string",
        "enum": [
          "NEW",
          "CONTINUED"
        ]
      },
      "LtvRange": {
        "type": "object",
        "properties": {
          "top": {
            "type": "number",
            "format": "double"
          },
          "bottom": {
            "type": "number",
            "format": "double"
          }
        }
      },
      "Mandate": {
        "type": "object",
        "properties": {
          "reference": {
            "type": "string"
          },
          "endDate": {
            "type": "string",
            "format": "date"
          },
          "ascription": {
            "type": "string"
          },
          "iban": {
            "type": "string"
          },
          "startDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "ManualAssessment": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[operator, motivation]. Expansion wildcards=[assessment*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Assessment"
          },
          {
            "type": "object",
            "properties": {
              "reason": {
                "type": "string"
              },
              "motivation": {
                "$ref": "#/components/schemas/Motivation"
              },
              "operator": {
                "$ref": "#/components/schemas/Operator"
              }
            }
          }
        ]
      },
      "MaritalState": {
        "required": [
          "current",
          "maritalStateType"
        ],
        "type": "object",
        "properties": {
          "current": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          },
          "maritalContractWith": {
            "description": "Expandable using [maritalStateContractWith].",
            "$ref": "#/components/schemas/Person"
          },
          "numberOfChildren": {
            "minimum": 0,
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "format": "int32"
          },
          "personRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]. ElementRef for field [maritalContractWith]."
          },
          "endDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "format": "date"
          },
          "maritalStateType": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "$ref": "#/components/schemas/MaritalStateType"
          },
          "resolution": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/MaritalStateResolution"
          },
          "startDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "format": "date"
          }
        },
        "description": "Required fields for products=[CONSUMER_LOAN] calculationTypes=[LTI, LTV, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY] are=[startDate, numberOfChildren]."
      },
      "MaritalStateResolution": {
        "type": "string",
        "enum": [
          "SEPARATED",
          "WIDOWED"
        ]
      },
      "MaritalStateType": {
        "type": "string",
        "enum": [
          "SINGLE",
          "MARRIED_ACCORDING_TO_FOREIGN_LAW",
          "MARRIED_IN_LIMITED_COMMUNITY_OF_GOODS",
          "MARRIED_WITH_COMMON_OWNERSHIP_OF_PROPERTY",
          "MARRIED_WITH_MARITAL_CONDITIONS",
          "PARTNER_REGISTRATION_IN_COMMUNITY_OF_GOODS",
          "PARTNER_REGISTRATION_IN_LIMITED_COMMUNITY_OF_GOODS",
          "PARTNER_REGISTRATION_UNDER_REGISTRATION_CONDITIONS",
          "LIVING_TOGETHER_WITH_ASOCIETY_CONTRACT",
          "LIVING_TOGETHER_WITHOUT_ASOCIETY_CONTRACT",
          "LIVING_TOGETHER"
        ]
      },
      "MessageSourceType": {
        "type": "string",
        "enum": [
          "HDN"
        ]
      },
      "MessageType": {
        "type": "string",
        "enum": [
          "AX",
          "OX",
          "DX",
          "SX",
          "KX"
        ]
      },
      "Metadata": {
        "required": [
          "handling",
          "phase",
          "status"
        ],
        "type": "object",
        "properties": {
          "phase": {
            "type": "string"
          },
          "requestType": {
            "type": "string"
          },
          "handling": {
            "$ref": "#/components/schemas/DossierHandling"
          },
          "status": {
            "type": "string"
          },
          "dossierNumber": {
            "type": "string"
          },
          "stateHistoryEntries": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/StateHistoryEntry"
            }
          }
        }
      },
      "MinimumTermPayment": {
        "required": [
          "amount",
          "interval"
        ],
        "type": "object",
        "properties": {
          "amount": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "interval": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/CalculationRedemptionInterval"
          }
        }
      },
      "MissingDocumentCondition": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MutationCondition"
          },
          {
            "required": [
              "missingDocumentType",
              "name",
              "status",
              "subject"
            ],
            "type": "object",
            "properties": {
              "subject": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "missingDocumentType": {
                "$ref": "#/components/schemas/MissingDocumentType"
              },
              "status": {
                "$ref": "#/components/schemas/MissingDocumentStatus"
              }
            }
          }
        ]
      },
      "MissingDocumentStatus": {
        "type": "string",
        "enum": [
          "RECEIVED",
          "TO_BE_RECEIVED",
          "INATTENDANCE",
          "NOT_APPLICABLE",
          "OBSERVATIENOTARAAD",
          "OBSERVATIENOTAOMLOOP",
          "RECEIVED_AND_TO_BE_TREATED",
          "NOT_BLOCKING"
        ]
      },
      "MissingDocumentType": {
        "type": "string",
        "enum": [
          "PARTY",
          "EXISTING_CREDIT",
          "REAL_ESTATE",
          "ASSET_GUARANTEE",
          "NOTARY",
          "CONDITION"
        ]
      },
      "MortgageApplicationRequest": {
        "required": [
          "assets",
          "contracts",
          "label",
          "legalPersons",
          "parties",
          "transaction"
        ],
        "type": "object",
        "properties": {
          "proposalLastAcceptDate": {
            "type": "string",
            "format": "date"
          },
          "relatedContracts": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "relatedLoan": "RelatedLoan",
                  "relatedInsurance": "RelatedInsurance"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/RelatedLoan"
                },
                {
                  "$ref": "#/components/schemas/RelatedInsurance"
                }
              ]
            }
          },
          "assets": {
            "maxItems": 2147483647,
            "minItems": 1,
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "realEstateSubUnit": "RealEstateSubUnit",
                  "additionalRealEstate": "AdditionalRealEstate",
                  "realEstate": "RealEstate"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/RealEstateSubUnit"
                },
                {
                  "$ref": "#/components/schemas/AdditionalRealEstate"
                },
                {
                  "$ref": "#/components/schemas/RealEstate"
                }
              ]
            }
          },
          "parties": {
            "maxItems": 2147483647,
            "minItems": 1,
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "funder": "Funder",
                  "contractor": "Contractor",
                  "notary": "Notary",
                  "guarantor": "Guarantor",
                  "calculationContractor": "CalculationContractor",
                  "intermediary": "Intermediary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Intermediary"
                },
                {
                  "$ref": "#/components/schemas/Contractor"
                },
                {
                  "$ref": "#/components/schemas/Funder"
                },
                {
                  "$ref": "#/components/schemas/Guarantor"
                },
                {
                  "$ref": "#/components/schemas/Notary"
                },
                {
                  "$ref": "#/components/schemas/CalculationContractor"
                }
              ]
            }
          },
          "bankAccounts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BankAccount"
            }
          },
          "mortgageRegistrations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MortgageRegistration"
            }
          },
          "label": {
            "$ref": "#/components/schemas/LabelCode"
          },
          "legalPersons": {
            "maxItems": 2147483647,
            "minItems": 1,
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "person": "Person",
                  "calculationPerson": "CalculationPerson",
                  "organization": "Organization"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/CalculationPerson"
                },
                {
                  "$ref": "#/components/schemas/Organization"
                },
                {
                  "$ref": "#/components/schemas/Person"
                }
              ]
            }
          },
          "contracts": {
            "maxItems": 2147483647,
            "minItems": 1,
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "mortgageLoan": "MortgageLoan",
                  "fund": "Fund",
                  "consumerLoan": "ConsumerLoan",
                  "loanPart": "LoanPart"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Fund"
                },
                {
                  "$ref": "#/components/schemas/LoanPart"
                },
                {
                  "$ref": "#/components/schemas/MortgageLoan"
                },
                {
                  "$ref": "#/components/schemas/ConsumerLoan"
                }
              ]
            }
          },
          "transaction": {
            "$ref": "#/components/schemas/TransferTransaction"
          }
        }
      },
      "MortgageLoan": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[loanType, nhg, principal, loanParts]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTV] are=[loanType, nhg]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY] are=[loanParts].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Loan"
          },
          {
            "type": "object",
            "properties": {
              "principal": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]. Is formatted as currency.",
                "format": "double"
              },
              "nhgMutation": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/NHGMutation"
              },
              "continuationReason": {
                "description": "CalculationTypes=[LTV].",
                "$ref": "#/components/schemas/ContinuationReason"
              },
              "calculation": {
                "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [mortgageLoanCalculation].",
                "$ref": "#/components/schemas/Calculation"
              },
              "costs": {
                "type": "array",
                "description": "Expandable using [mortgageLoanCosts].",
                "items": {
                  "$ref": "#/components/schemas/Cost"
                }
              },
              "requestType": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "loanType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV].",
                "$ref": "#/components/schemas/LoanType"
              },
              "constructionFunds": {
                "type": "array",
                "description": "Expandable using [mortgageConstructionFunds].",
                "items": {
                  "$ref": "#/components/schemas/ConstructionFund"
                }
              },
              "loanParts": {
                "maxItems": 2147483647,
                "minItems": 1,
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Expandable using [mortgageLoanParts].",
                "items": {
                  "$ref": "#/components/schemas/LoanPart"
                }
              },
              "constructionFundRefs": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [constructionFunds].",
                "items": {
                  "type": "string"
                }
              },
              "nhg": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]."
              }
            }
          }
        ]
      },
      "MortgageLoanSummary": {
        "allOf": [
          {
            "$ref": "#/components/schemas/LoanSummary"
          },
          {
            "type": "object",
            "properties": {
              "totalAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "isBridgeLoan": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "loanType": {
                "$ref": "#/components/schemas/LoanType"
              },
              "transferDate": {
                "type": "string",
                "format": "date"
              }
            }
          }
        ]
      },
      "MortgageRegistration": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Collateral"
          },
          {
            "required": [
              "rank"
            ],
            "type": "object",
            "properties": {
              "parcel": {
                "$ref": "#/components/schemas/Parcel"
              },
              "personRefs": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [legalPersons].",
                "items": {
                  "type": "string"
                }
              },
              "mortgageRegistrationActionType": {
                "description": "Relevant for products=[MORTGAGE_LOAN]. Required for requests=[Post].",
                "$ref": "#/components/schemas/MortgageRegistrationActionType"
              },
              "legalPersons": {
                "type": "array",
                "description": "Expandable using [mortgageRegistrationPersons].",
                "items": {
                  "discriminator": {
                    "propertyName": "type",
                    "mapping": {
                      "person": "Person",
                      "calculationPerson": "CalculationPerson",
                      "organization": "Organization"
                    }
                  },
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/CalculationPerson"
                    },
                    {
                      "$ref": "#/components/schemas/Organization"
                    },
                    {
                      "$ref": "#/components/schemas/Person"
                    }
                  ]
                }
              },
              "extraInscriptionAmount": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "assets": {
                "type": "array",
                "description": "Expandable using [mortgageRegistrationAssets].",
                "items": {
                  "discriminator": {
                    "propertyName": "type",
                    "mapping": {
                      "realEstateSubUnit": "RealEstateSubUnit",
                      "additionalRealEstate": "AdditionalRealEstate",
                      "realEstate": "RealEstate"
                    }
                  },
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/RealEstateSubUnit"
                    },
                    {
                      "$ref": "#/components/schemas/AdditionalRealEstate"
                    },
                    {
                      "$ref": "#/components/schemas/RealEstate"
                    }
                  ]
                }
              },
              "assetRefs": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [assets].",
                "items": {
                  "type": "string"
                }
              },
              "rank": {
                "type": "integer",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "int32"
              },
              "nhgReports": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "items": {
                  "$ref": "#/components/schemas/NHGReport"
                }
              },
              "warrantyType": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "relations": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/Relation"
                }
              },
              "loanRefs": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "items": {
                  "type": "string"
                }
              },
              "isIncludedInLTVCalculation": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "status": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              }
            }
          }
        ]
      },
      "MortgageRegistrationActionType": {
        "type": "string",
        "enum": [
          "ESTABLISH",
          "DISMISS",
          "MAINTAIN"
        ]
      },
      "Motivation": {
        "type": "object",
        "properties": {
          "internal": {
            "type": "string"
          },
          "external": {
            "type": "string"
          }
        }
      },
      "MutationCollateralType": {
        "type": "string",
        "enum": [
          "ACTIVATE_COLLATERAL",
          "RELEASE_WARRANTY",
          "TRANSFORM_MANDATE_TO_INSCRIPTION",
          "CHANGE_REAL_ESTATE",
          "DELETE_COLLATERAL",
          "RELEASE_REAL_ESTATE"
        ]
      },
      "MutationCondition": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "requiredActionCondition": "RequiredActionCondition",
            "freeCondition": "FreeCondition",
            "mutationToBeActiveCondition": "MutationToBeActiveCondition",
            "missingDocumentCondition": "MissingDocumentCondition",
            "prepaymentCondition": "PrepaymentCondition"
          }
        }
      },
      "MutationDetail": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "collateralMutationDetail": "CollateralMutationDetail",
            "amortizationVersionToBeActivatedMutationDetail": "AmortizationVersionToBeActivatedMutationDetail",
            "roleMutationDetail": "RoleMutationDetail"
          }
        }
      },
      "MutationKind": {
        "type": "string",
        "enum": [
          "REGULAR_MUTATION",
          "SPLIT",
          "PREPAYMENT",
          "INCREASE"
        ]
      },
      "MutationRoleType": {
        "type": "string",
        "enum": [
          "ADD_ROLE",
          "DELETE_ROLE"
        ]
      },
      "MutationStatus": {
        "type": "string",
        "enum": [
          "CREATED",
          "CANCELLED",
          "ACTIVATED",
          "PENDING_ACTIVATION",
          "PROPOSED",
          "READY_FOR_PROPOSAL"
        ]
      },
      "MutationStatusHistoryItem": {
        "required": [
          "changeDate",
          "changeUser",
          "status"
        ],
        "type": "object",
        "properties": {
          "changeUser": {
            "type": "string"
          },
          "changeDate": {
            "type": "string",
            "format": "date"
          },
          "status": {
            "$ref": "#/components/schemas/MutationStatus"
          }
        }
      },
      "MutationToBeActiveCondition": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MutationCondition"
          },
          {
            "required": [
              "seqNo"
            ],
            "type": "object",
            "properties": {
              "seqNo": {
                "type": "integer",
                "format": "int32"
              }
            }
          }
        ]
      },
      "MutationType": {
        "type": "string",
        "enum": [
          "RATE_REVISION",
          "PRODUCT_CONVERSION",
          "INCREASE",
          "DURATION_CHANGE",
          "PARTIAL_PREPAYMENT_SAME_DUE_DATE_AMOUNT",
          "PARTIAL_PREPAYMENT_SAME_DURATION",
          "NON_CONTRACTUAL_RATE_REVIONS",
          "DUE_DATE_CHANGE",
          "PERIODICITY_CHANGE",
          "OUTGOING_PAYMENT",
          "ADD_ARRANGEMENT",
          "REMOVE_ARRANGEMENT",
          "NON_CONTRACTUAL_RATE_REVISION_WITH_INTEREST_MEDIATION",
          "COMPLETE_PREPAYMENT_WITHOUT_ENDING_CREDIT",
          "COMPLETE_PREPAYMENT_WITH_ENDING_CREDIT",
          "DELETE_ENDED_RATE_ADAPTATIONS",
          "REEVALUATE_RATE_ADAPTATIONS",
          "MODIFY_DUE_AMOUNT_REPAYMENT_HANDLING",
          "OUTGOING_TRANSFER",
          "INTEREST_CAPITALIZATION",
          "LOAN_PURPOSE_CHANGE",
          "CLOSING_DATE_CHANGE",
          "REACTIVATED_OUTGOING_PAYMENT",
          "ECONOMIC_OWNER_CONVERSION"
        ]
      },
      "NHGMutation": {
        "type": "string",
        "enum": [
          "IMPROVED_CUSTOMER_SITUATION",
          "PURCHASE_PROPERTY",
          "QUALITY_IMPROVEMENT"
        ]
      },
      "NHGReport": {
        "type": "object",
        "properties": {
          "guaranteeFundNumberForLoan": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "guaranteeType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/GuaranteeType"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "guaranteeNumber": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "registrationResult": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/RegistrationResult"
          }
        }
      },
      "Node": {
        "type": "object",
        "properties": {
          "parent": {
            "type": "object"
          },
          "current": {
            "type": "object"
          }
        }
      },
      "NormCalculationMethod": {
        "type": "string",
        "enum": [
          "LTV",
          "LTC",
          "REGULAR",
          "DEBT_BASED_RATIO"
        ]
      },
      "NormCalculationResult": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CalculationResult"
          },
          {
            "type": "object",
            "properties": {
              "calculationType": {
                "$ref": "#/components/schemas/CalculationType"
              },
              "method": {
                "$ref": "#/components/schemas/NormCalculationMethod"
              },
              "normCode": {
                "$ref": "#/components/schemas/NormCode"
              },
              "maximumLoanAmount": {
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "spendingCapacity": {
                "type": "number",
                "format": "double"
              },
              "percentageRatio": {
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              }
            }
          }
        ]
      },
      "NormCode": {
        "type": "string",
        "enum": [
          "NVB",
          "VFN",
          "NTO",
          "NHG"
        ]
      },
      "Notary": {
        "description": "Expansion wildcards=[party*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Party"
          },
          {
            "required": [
              "passing",
              "registrationNumber",
              "transporting",
              "warrantyComposer"
            ],
            "type": "object",
            "properties": {
              "transporting": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "registrationNumber": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "passing": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "warrantyComposer": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              }
            }
          }
        ]
      },
      "NotaryPayment": {
        "type": "object",
        "properties": {
          "amountDue": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "amountPending": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "amountPaid": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "totalAmountRequired": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "OfficialDocument": {
        "required": [
          "documentNumber",
          "documentType"
        ],
        "type": "object",
        "properties": {
          "expiryDate": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
            "format": "date"
          },
          "purpose": {
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/OfficialDocumentPurposeType"
          },
          "documentType": {
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/OfficialDocumentType"
          },
          "documentNumber": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN]."
          },
          "issueDate": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN].",
            "format": "date"
          }
        },
        "description": "Required fields for products=[CONSUMER_LOAN] are=[purpose]."
      },
      "OfficialDocumentPurposeType": {
        "type": "string",
        "enum": [
          "IDENTIFICATION",
          "PERMIT_TO_RESIDE",
          "PERMIT_TO_WORK"
        ]
      },
      "OfficialDocumentType": {
        "type": "string",
        "enum": [
          "PASSPORT",
          "IDENTITY_CARD",
          "DRIVERS_LICENSE",
          "PERMIT",
          "UNKNOWN"
        ]
      },
      "Operation": {
        "type": "string",
        "enum": [
          "ADD",
          "REMOVE",
          "REPLACE",
          "MOVE",
          "COPY",
          "TEST"
        ]
      },
      "OperationOptionsResponse": {
        "type": "object",
        "properties": {
          "supportedOperations": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "OperationResult": {
        "type": "string",
        "enum": [
          "SUCCESS",
          "ERROR"
        ]
      },
      "Operator": {
        "type": "object",
        "properties": {
          "accountName": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[accountName, displayName]. Required fields for products=[CONSUMER_LOAN] are=[accountName]."
      },
      "Organization": {
        "description": "Expansion wildcards=[legalPerson*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/LegalPerson"
          },
          {
            "required": [
              "name"
            ],
            "type": "object",
            "properties": {
              "contactPersonRef": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]. ElementRef for field [person]."
              },
              "person": {
                "description": "Expandable using [organizationContactPerson].",
                "$ref": "#/components/schemas/Person"
              },
              "name": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "chamberOfCommerceNumber": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              },
              "legalForm": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/LegalFormType"
              }
            }
          }
        ]
      },
      "OrganizationSummary": {
        "allOf": [
          {
            "$ref": "#/components/schemas/LegalPersonSummary"
          },
          {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              }
            }
          }
        ]
      },
      "OtherIncome": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[otherIncomeType].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Income"
          },
          {
            "required": [
              "incomeAmount"
            ],
            "type": "object",
            "properties": {
              "otherIncomeType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/OtherIncomeType"
              },
              "incomeAmount": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/IncomeAmount"
              },
              "description": {
                "maxLength": 255,
                "minLength": 0,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]."
              }
            }
          }
        ]
      },
      "OtherIncomeType": {
        "type": "string",
        "enum": [
          "ALIMONY",
          "DONATION",
          "BOX_ONE",
          "BOX_TWO",
          "OTHER"
        ]
      },
      "OutputLoanPart": {
        "required": [
          "maximumTermPayment",
          "relevantTermPayment",
          "solutionPossible"
        ],
        "type": "object",
        "properties": {
          "relevantTermPayment": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "maximumTermPayment": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "solutionPossible": {
            "type": "boolean"
          },
          "preferredDuration": {
            "minimum": 0,
            "type": "integer",
            "format": "int32"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "maximumDurationForMinimumTermPayment": {
            "minimum": 0,
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "Parcel": {
        "required": [
          "branch",
          "register",
          "section"
        ],
        "type": "object",
        "properties": {
          "number": {
            "type": "string"
          },
          "section": {
            "type": "string"
          },
          "branch": {
            "type": "string"
          },
          "register": {
            "type": "string"
          }
        }
      },
      "Partition": {
        "required": [
          "status"
        ],
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "status": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/PartitionStatusType"
          }
        }
      },
      "PartitionStatusType": {
        "type": "string",
        "enum": [
          "IS_PARTITIONED",
          "TO_BE_PARTITIONED"
        ]
      },
      "Party": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "personRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN]. ElementRef for field [legalPerson]."
          },
          "partyRoleType": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI].",
            "$ref": "#/components/schemas/PartyRoleType"
          },
          "entityId": {
            "type": "string"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          },
          "externalReference": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "corporateRelationId": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN]."
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "legalPerson": {
            "description": "Expandable using [partyLegalPerson].",
            "discriminator": {
              "propertyName": "type",
              "mapping": {
                "person": "Person",
                "calculationPerson": "CalculationPerson",
                "organization": "Organization"
              }
            },
            "oneOf": [
              {
                "$ref": "#/components/schemas/CalculationPerson"
              },
              {
                "$ref": "#/components/schemas/Organization"
              },
              {
                "$ref": "#/components/schemas/Person"
              }
            ]
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          },
          "assetOwnership": {
            "description": "Relevant for products=[CONSUMER_LOAN].",
            "$ref": "#/components/schemas/AssetOwnership"
          }
        },
        "description": "Expansion wildcards=[party*]",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "funder": "Funder",
            "contractor": "Contractor",
            "notary": "Notary",
            "guarantor": "Guarantor",
            "calculationContractor": "CalculationContractor",
            "intermediary": "Intermediary"
          }
        }
      },
      "PartyFinancial": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "endDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "format": "date"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          },
          "startDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "format": "date"
          },
          "frequency": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "$ref": "#/components/schemas/PeriodLength"
          }
        },
        "description": "Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[frequency]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[startDate].",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "income": "Income",
            "expense": "Expense"
          }
        }
      },
      "PartyFinancialAmount": {
        "required": [
          "frequency",
          "type"
        ],
        "type": "object",
        "properties": {
          "amountGross": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]. Is formatted as currency.",
            "format": "double"
          },
          "type": {
            "type": "string"
          },
          "frequency": {
            "description": "For LTI supported values=[ONE_TIME, YEAR, MONTH] Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI].",
            "$ref": "#/components/schemas/PeriodLength",
            "deprecated": false
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[amountGross].",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "expenseAmount": "ExpenseAmount",
            "incomeAmount": "IncomeAmount"
          }
        }
      },
      "PartyRoleType": {
        "type": "string",
        "enum": [
          "MAIN_BORROWER",
          "CO_BORROWER",
          "CO_DEBTOR",
          "MORTGAGE_WARRANTOR",
          "BAILIFF",
          "LAWYER",
          "APPRAISER",
          "NOTARY",
          "DEBT_COUNSELOR",
          "PARTY_IN_CLAIM",
          "PAYMENT_PROMISER",
          "FUNDER",
          "INTERMEDIARY",
          "JUDICIAL_OWNER"
        ]
      },
      "PartySummary": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "legalPerson": {
            "description": "Expandable using [partySummaryLegalPerson].",
            "discriminator": {
              "propertyName": "type",
              "mapping": {
                "organizationSummary": "OrganizationSummary",
                "personSummary": "PersonSummary"
              }
            },
            "oneOf": [
              {
                "$ref": "#/components/schemas/OrganizationSummary"
              },
              {
                "$ref": "#/components/schemas/PersonSummary"
              }
            ]
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "contractorSummary": "ContractorSummary",
            "intermediarySummary": "IntermediarySummary"
          }
        }
      },
      "PaymentCapacity": {
        "type": "string",
        "enum": [
          "NONE",
          "MINIMAL",
          "INTEREST_ONLY",
          "FULL"
        ]
      },
      "PaymentMethod": {
        "type": "string",
        "enum": [
          "IDEAL",
          "MANUAL_PAYMENT",
          "DIRECT_DEBIT"
        ]
      },
      "PenaltyCalculation": {
        "type": "object",
        "properties": {
          "penaltyAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "PensionIncome": {
        "description": "Required fields for products=[CONSUMER_LOAN] are=[pensionType].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Income"
          },
          {
            "required": [
              "pensionAmount"
            ],
            "type": "object",
            "properties": {
              "retirementAge": {
                "type": "integer",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "int32"
              },
              "pensionAmount": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/IncomeAmount"
              },
              "pensionType": {
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN].",
                "$ref": "#/components/schemas/PensionType"
              }
            }
          }
        ]
      },
      "PensionType": {
        "type": "string",
        "enum": [
          "PENSION",
          "DEPENDANT_PENSION"
        ]
      },
      "PeriodLength": {
        "type": "string",
        "enum": [
          "WEEK",
          "FOUR_WEEKS",
          "MONTH",
          "TWO_MONTHS",
          "YEAR",
          "QUARTERLY",
          "SEMIANNUAL",
          "ONE_TIME"
        ]
      },
      "Periodicity": {
        "type": "string",
        "enum": [
          "MONTHLY",
          "TRI_MONTHLY",
          "BI_ANNUAL",
          "ANNUAL"
        ]
      },
      "Permit": {
        "required": [
          "permitType"
        ],
        "type": "object",
        "properties": {
          "permitType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/PermitType"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "PermitType": {
        "type": "string",
        "enum": [
          "HOUSING_WITHDRAWAL_PERMIT",
          "PARTITION_PERMIT",
          "ENVIRONMENTAL_PERMIT",
          "FIRE_SAFETY_CERTIFICATE"
        ]
      },
      "Person": {
        "description": "Expansion wildcards=[legalPerson*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/LegalPerson"
          },
          {
            "required": [
              "familyName"
            ],
            "type": "object",
            "properties": {
              "firstName": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]."
              },
              "birthPlace": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]."
              },
              "gender": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI].",
                "$ref": "#/components/schemas/Gender"
              },
              "nationality": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]. Required for requests=[Post].",
                "$ref": "#/components/schemas/CountryCode"
              },
              "initials": {
                "maxLength": 50,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]."
              },
              "familyName": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]."
              },
              "familyNamePrefix": {
                "maxLength": 50,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]."
              },
              "birthNamePrefix": {
                "maxLength": 10,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]."
              },
              "birthDate": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]. Required for requests=[Post].",
                "format": "date"
              },
              "birthName": {
                "maxLength": 255,
                "minLength": 1,
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI]."
              }
            }
          }
        ]
      },
      "PersonSummary": {
        "allOf": [
          {
            "$ref": "#/components/schemas/LegalPersonSummary"
          },
          {
            "type": "object",
            "properties": {
              "firstName": {
                "type": "string"
              },
              "gender": {
                "$ref": "#/components/schemas/Gender"
              },
              "initials": {
                "type": "string"
              },
              "familyNamePrefix": {
                "type": "string"
              },
              "familyName": {
                "type": "string"
              },
              "birthNamePrefix": {
                "type": "string"
              },
              "birthDate": {
                "type": "string",
                "format": "date"
              },
              "birthName": {
                "type": "string"
              }
            }
          }
        ]
      },
      "Phone": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ContactDetail"
          },
          {
            "required": [
              "phoneNumber",
              "phoneType"
            ],
            "type": "object",
            "properties": {
              "phoneType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
                "$ref": "#/components/schemas/PhoneType"
              },
              "phoneNumber": {
                "maxLength": 20,
                "minLength": 1,
                "pattern": "((\\+\\d{8,14})|([0]\\d{9}))",
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
              }
            }
          }
        ]
      },
      "PhoneType": {
        "type": "string",
        "enum": [
          "BUSINESS",
          "WORK",
          "HOME",
          "MOBILE"
        ]
      },
      "PrepaymentCondition": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MutationCondition"
          },
          {
            "required": [
              "amortizationRecalculationType",
              "chargePrepaymentPenalty",
              "costAmount",
              "dailyInterest",
              "direction",
              "externalReference",
              "futureInterestAmount",
              "futurePrincipalAmount",
              "futureProRataInterestAmount",
              "interestOnArrearAmount",
              "isCharged",
              "isFullPrepaymentNeeded",
              "notificationDate",
              "outstandingAmount",
              "paymentExpirationDate",
              "penaltyFreeFromDate",
              "penaltyFreeToDate",
              "policies",
              "premiumAmount",
              "prepaymentAmount",
              "prepaymentDate",
              "prepaymentPenaltyAmount",
              "prepaymentPenaltyOverride",
              "prepaymentType",
              "previousProRataDuringPeriodAmount",
              "proRataInterestAmount",
              "reason",
              "refundAmount",
              "totalBonusAmount",
              "totalDepotInterestAmount",
              "totalDepotOutstandingAmount",
              "totalDueAmount",
              "totalOfSum",
              "totalToPay",
              "validUntil"
            ],
            "type": "object",
            "properties": {
              "premiumAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "prepaymentAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "reason": {
                "type": "string"
              },
              "outstandingAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "previousProRataDuringPeriodAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "chargePrepaymentPenalty": {
                "type": "boolean"
              },
              "policies": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PrepaymentSimulationMutationPolicy"
                }
              },
              "paymentExpirationDate": {
                "type": "string",
                "format": "date"
              },
              "isFullPrepaymentNeeded": {
                "type": "boolean"
              },
              "penaltyFreeFromDate": {
                "type": "string",
                "format": "date"
              },
              "prepaymentDate": {
                "type": "string",
                "format": "date"
              },
              "totalBonusAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "futurePrincipalAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "isCharged": {
                "type": "boolean"
              },
              "dailyInterest": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              },
              "totalOfSum": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "futureProRataInterestAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "direction": {
                "$ref": "#/components/schemas/PrepaymentDirection"
              },
              "refundAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "totalToPay": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "penaltyFreeToDate": {
                "type": "string",
                "format": "date"
              },
              "costAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "proRataInterestAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "futureInterestAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "externalReference": {
                "type": "string"
              },
              "amortizationRecalculationType": {
                "$ref": "#/components/schemas/AmortizationRecalculationType"
              },
              "prepaymentPenaltyAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "totalDueAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "prepaymentPenaltyOverride": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "validUntil": {
                "type": "string",
                "format": "date"
              },
              "prepaymentType": {
                "$ref": "#/components/schemas/PrepaymentType"
              },
              "totalDepotInterestAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "interestOnArrearAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "totalDepotOutstandingAmount": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as currency.",
                "format": "double"
              },
              "notificationDate": {
                "type": "string",
                "format": "date"
              }
            }
          }
        ]
      },
      "PrepaymentDirection": {
        "type": "string",
        "enum": [
          "GROSS_NET",
          "NET_GROSS"
        ]
      },
      "PrepaymentMutation": {
        "required": [
          "amount",
          "direction",
          "expectedPrepaymentDate",
          "loanpartSeqNo"
        ],
        "type": "object",
        "properties": {
          "amount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "prepaymentReason": {
            "type": "integer",
            "format": "int32"
          },
          "loanpartSeqNo": {
            "type": "integer",
            "format": "int32"
          },
          "expectedPrepaymentDate": {
            "type": "string",
            "format": "date"
          },
          "direction": {
            "$ref": "#/components/schemas/PrepaymentDirection"
          }
        }
      },
      "PrepaymentMutationResult": {
        "required": [
          "mutationSeqNo",
          "loanpartSeqNo",
          "direction",
          "amount",
          "expectedPrepaymentDate"
        ],
        "type": "object",
        "properties": {
          "mutationSeqNo": {
            "type": "integer",
            "format": "int32"
          },
          "amount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "prepaymentReason": {
            "type": "integer",
            "format": "int32"
          },
          "loanpartSeqNo": {
            "type": "integer",
            "format": "int32"
          },
          "expectedPrepaymentDate": {
            "type": "string",
            "format": "date"
          },
          "direction": {
            "$ref": "#/components/schemas/PrepaymentDirection"
          }
        }
      },
      "PrepaymentPenalty": {
        "type": "object",
        "properties": {
          "presentValuePenaltyCalculation": {
            "$ref": "#/components/schemas/PresentValuePenaltyCalculation"
          },
          "totalPenaltyAmountLimited": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "penaltyBaseAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "totalPenaltyAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "penaltyFreeAmountToUse": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "marketInterestRateToUse": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          }
        }
      },
      "PrepaymentPenaltyMethod": {
        "type": "string",
        "enum": [
          "NET_PRESENT_VALUE_FULL_DURATION",
          "NO_PENALTY",
          "THREE_MONTHS",
          "FOUR_MONTHS",
          "SIX_MONTHS",
          "NET_PRESENT_VALUE_REMAINING_DURATION",
          "MANUAL_DETERMINATION",
          "NO_PENALTY_FOR_PREPAYMENT_NPV_FULL_DURATION_FOR_NCRR",
          "NO_PENALTY_FOR_PREPAYMENT_NPV_REMAINING_DURATION_FOR_NCRR",
          "MAX_THREE_MONTHS_AND_NPV_FULL_DURATION",
          "MAX_THREE_MONTHS_AND_NPV_REMAINING_DURATION"
        ]
      },
      "PrepaymentSimulation": {
        "required": [
          "amortizationRecalculationType",
          "direction",
          "prepaymentAmount",
          "prepaymentDate",
          "reason"
        ],
        "type": "object",
        "properties": {
          "prepaymentAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "reason": {
            "type": "string"
          },
          "calculatePrepaymentPenaltyRequest": {
            "type": "string"
          },
          "amortization": {
            "$ref": "#/components/schemas/PrepaymentSimulationRedemption"
          },
          "prepaymentPenalty": {
            "$ref": "#/components/schemas/PrepaymentPenalty"
          },
          "prepaymentDate": {
            "type": "string",
            "format": "date"
          },
          "totalBonusAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "futurePrincipalAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "dailyInterest": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "totalOfSum": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "futureProRataInterestAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "direction": {
            "$ref": "#/components/schemas/PrepaymentDirection"
          },
          "refundAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "totalToPay": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "costAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "proRataInterestAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "futureInterestAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "remainingPrincipalAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "calculatePrepaymentPenaltyResponse": {
            "type": "string"
          },
          "externalReference": {
            "type": "string"
          },
          "amortizationRecalculationType": {
            "$ref": "#/components/schemas/AmortizationRecalculationType"
          },
          "prepaymentPenaltyAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "totalDueAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "prepaymentType": {
            "$ref": "#/components/schemas/PrepaymentType"
          },
          "totalDepotInterestAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "interestOnArrearAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "totalDepotOutstandingAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "PrepaymentSimulationBuilder": {
        "type": "object",
        "properties": {
          "prepaymentSimulation": {
            "$ref": "#/components/schemas/PrepaymentSimulation"
          }
        }
      },
      "PrepaymentSimulationMutationPolicy": {
        "required": [
          "collateralExternalReference",
          "surrenderValue"
        ],
        "type": "object",
        "properties": {
          "collateralExternalReference": {
            "type": "string"
          },
          "surrenderValue": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "PrepaymentSimulationRedemption": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Amortization"
          },
          {
            "type": "object",
            "properties": {
              "terms": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/PrepaymentSimulationRedemptionTerm"
                }
              },
              "durationInPeriods": {
                "type": "integer",
                "format": "int32"
              },
              "netRate": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              }
            }
          }
        ]
      },
      "PrepaymentSimulationRedemptionTerm": {
        "type": "object",
        "properties": {
          "sumInstallmentAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "customerInterestPercentage": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "precedingProRataThirdPartyInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "principalOutstanding": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "dueDate": {
            "type": "string",
            "format": "date"
          },
          "seqNr": {
            "type": "integer",
            "format": "int32"
          },
          "interestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "precedingProRataCustomerInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "sumPrecedingProRataThirdPartyInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "isLinkedWithAmortizationInterestDetail": {
            "type": "boolean"
          },
          "customerInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "redemptionAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "totalAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "thirdPartyInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "thirdPartyInterestPercentage": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "precedingProRataInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "sumPrecedingProRataCustomerInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "sumInterestAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "term": {
            "type": "integer",
            "format": "int32"
          },
          "state": {
            "$ref": "#/components/schemas/PrepaymentSimulationRedemptionTermState"
          },
          "isCurrentDueDate": {
            "type": "boolean"
          }
        }
      },
      "PrepaymentSimulationRedemptionTermState": {
        "type": "string",
        "enum": [
          "UNKNOWN",
          "CREATED",
          "UNMODIFIED",
          "DIRTY",
          "DELETED"
        ]
      },
      "PrepaymentType": {
        "type": "string",
        "enum": [
          "PARTIAL_PREPAYMENT_FOR_MORTGAGE_NL",
          "COMPLETE_PREPAYMENT_FOR_MORTGAGE_NL",
          "PREPAYMENT_FROM_DEPOT_FOR_MORTGAGE_NL",
          "PARTIAL_PREPAYMENT_FROM_BONUS_FOR_MORTGAGE_NL",
          "PARTIAL_PREPAYMENT_FOR_CONSUMER_LOAN",
          "COMPLETE_PREPAYMENT_FOR_CONSUMER_LOAN"
        ]
      },
      "PresentValuePenaltyCalculation": {
        "type": "object",
        "properties": {
          "totalInterestPaymentsBasedOnMarket": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "remainingNumberOfPeriods": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "totalInterestLoss": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "presentValueWholePeriods": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "keyLoansumEarlyPaymentDate": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "numberOfPeriodsPerYear": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "amortization": {
            "$ref": "#/components/schemas/PresentValuePenaltyRedemption"
          },
          "penaltyAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "presentValueBrokenPeriod": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "numberOfDaysInBrokenPeriod": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "totalDueInterestPayments": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          }
        }
      },
      "PresentValuePenaltyRedemption": {
        "type": "object",
        "properties": {
          "amount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "terms": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PresentValuePenaltyRedemptionTerm"
            }
          },
          "interval": {
            "$ref": "#/components/schemas/PresentValuePenaltyRedemptionInterval"
          },
          "amountSecuredCapitalStart": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "PresentValuePenaltyRedemptionInterval": {
        "type": "string",
        "enum": [
          "YEARLY",
          "HALF_YEARLY",
          "QUARTERLY",
          "MONTHLY"
        ]
      },
      "PresentValuePenaltyRedemptionTerm": {
        "type": "object",
        "properties": {
          "redemptionAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "remainingPrincipal": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "interestAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "interestLossAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "term": {
            "minimum": 0,
            "type": "number",
            "format": "double"
          },
          "marketInterestPartAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "pvInterestLossAmount": {
            "minimum": 0,
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "Probation": {
        "type": "object",
        "properties": {
          "duration": {
            "minimum": 0,
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI].",
            "format": "int32"
          },
          "passed": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI]."
          }
        }
      },
      "Product": {
        "required": [
          "code"
        ],
        "type": "object",
        "properties": {
          "code": {
            "maxLength": 255,
            "minLength": 0,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          },
          "providerCode": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "name": {
            "maxLength": 100,
            "minLength": 0,
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          },
          "commercialProduct": {
            "$ref": "#/components/schemas/CommercialProduct"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "description": "Relevant for products=[CONSUMER_LOAN].",
            "$ref": "#/components/schemas/ConsumerLoanType"
          },
          "productDetails": {
            "$ref": "#/components/schemas/ProductDetails"
          }
        }
      },
      "ProductDetails": {
        "type": "object",
        "properties": {
          "prepaymentPenaltyMethod": {
            "$ref": "#/components/schemas/PrepaymentPenaltyMethod"
          },
          "isRewithdrawable": {
            "type": "boolean"
          },
          "interestCalculation": {
            "$ref": "#/components/schemas/InterestCalculationType"
          },
          "prepaymentPenaltyExemptionPercentage": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "penaltyFreePeriodBeforeRevisionDateInMonths": {
            "type": "integer",
            "format": "int32"
          },
          "penaltyFreePeriodAfterRevisionDateInMonths": {
            "type": "integer",
            "format": "int32"
          },
          "isInterestOnArrearsApplicable": {
            "type": "boolean"
          }
        }
      },
      "ProductFamilyType": {
        "type": "string",
        "enum": [
          "CONSUMER_LOAN",
          "MORTGAGE_LOAN"
        ]
      },
      "ProjectLocation": {
        "type": "object",
        "properties": {
          "situationNumber": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "city": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "countryCode": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/CountryCode"
          },
          "municipality": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "projectName": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          }
        }
      },
      "Proposal": {
        "type": "object",
        "properties": {
          "lastAcceptDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "lastDateAfterExtension": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "binding": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/Binding"
          }
        }
      },
      "ProposalSummary": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "lastAcceptDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "PurposeType": {
        "type": "string",
        "enum": [
          "RESIDENCE",
          "OFFICE",
          "STORE",
          "HOSPITALITY",
          "RECREATION"
        ]
      },
      "PutOperation": {
        "type": "string",
        "enum": [
          "CREATE",
          "REPLACE"
        ]
      },
      "PutResponse": {
        "type": "object",
        "properties": {
          "traceId": {
            "type": "string"
          },
          "entityReference": {
            "type": "string"
          },
          "etag": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "message": {
            "type": "string"
          },
          "operation": {
            "$ref": "#/components/schemas/PutOperation"
          }
        }
      },
      "Rate": {
        "type": "object",
        "properties": {
          "interest": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "endDate": {
            "type": "string",
            "format": "date"
          },
          "startDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "RateAdaptation": {
        "required": [
          "endDate",
          "rateAdaptationName",
          "startDate"
        ],
        "type": "object",
        "properties": {
          "rateAdaptationPercentage": {
            "type": "number",
            "description": "Is formatted as percentage.",
            "format": "double"
          },
          "endDate": {
            "type": "string",
            "format": "date"
          },
          "rateAdaptationName": {
            "type": "string"
          },
          "startDate": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "RateDefinition": {
        "type": "object",
        "properties": {
          "loanPurposes": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "guaranteeTypes": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "currentStatus": {
            "$ref": "#/components/schemas/TariffStatus"
          },
          "canBeAddedManually": {
            "type": "boolean"
          },
          "excludedLoanPurposes": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "rates": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Rate"
            }
          },
          "name": {
            "type": "string"
          },
          "productNames": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "productGroups": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "paymentFrequency": {
            "type": "string"
          },
          "canBeRemovedManually": {
            "type": "boolean"
          },
          "ltv": {
            "$ref": "#/components/schemas/LtvRange"
          }
        }
      },
      "RateRevisionChoice": {
        "type": "string",
        "enum": [
          "DEFAULT",
          "RATE_REVISION_OPTION",
          "CHOSEN_BY_CUSTOMER"
        ]
      },
      "RealEstate": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[realEstateScenario, realEstateBuildingType, use]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTV] are=[realEstateRole]. Expansion wildcards=[asset*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Asset"
          },
          {
            "type": "object",
            "properties": {
              "projectLocation": {
                "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [projectLocation].",
                "$ref": "#/components/schemas/ProjectLocation"
              },
              "address": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/Address"
              },
              "constructionYear": {
                "type": "integer",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "int32"
              },
              "use": {
                "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [use].",
                "$ref": "#/components/schemas/Use"
              },
              "alreadyOwned": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "realEstateRatings": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV].",
                "items": {
                  "$ref": "#/components/schemas/RealEstateRating"
                }
              },
              "marketValue": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "isMainSubsidy": {
                "type": "boolean"
              },
              "energyNeutral": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN]."
              },
              "realEstateBuildingSubType": {
                "type": "string"
              },
              "realEstateBuildingTypeStr": {
                "type": "string"
              },
              "extraCosts": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN].",
                "$ref": "#/components/schemas/ExtraCosts"
              },
              "purchasePriceOfLand": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]. Is formatted as currency.",
                "format": "double"
              },
              "realEstateImprovements": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN].",
                "items": {
                  "$ref": "#/components/schemas/RealEstateImprovement"
                }
              },
              "permits": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "items": {
                  "$ref": "#/components/schemas/Permit"
                }
              },
              "realEstateRole": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV].",
                "$ref": "#/components/schemas/RealEstateRole"
              },
              "leaseHold": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, LTV, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Expandable using [leaseHold].",
                "$ref": "#/components/schemas/LeaseHold"
              },
              "marketValueAfterRenovation": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]. Is formatted as currency.",
                "format": "double"
              },
              "realEstateBuildingType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV, ADDITIONAL_LOAN].",
                "$ref": "#/components/schemas/RealEstateBuildingType"
              },
              "selfBuilding": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "marketValueAfterRenovationExEnergySavings": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV].",
                "format": "double"
              },
              "constructionCosts": {
                "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [constructionCosts].",
                "$ref": "#/components/schemas/ConstructionCosts"
              },
              "landRegistrations": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [landRegistrations].",
                "items": {
                  "$ref": "#/components/schemas/LandRegistration"
                }
              },
              "status": {
                "type": "string"
              }
            }
          }
        ]
      },
      "RealEstateBuildingType": {
        "type": "string",
        "enum": [
          "SINGLE_FAMILY_HOME",
          "SINGLE_FAMILY_HOME_WITH_GARAGE",
          "FLAT_APARTMENT",
          "FLAT_APARTMENT_WITH_GARAGE",
          "SHOP_HOUSE",
          "RETAIL_RESIDENTIAL_HOUSE",
          "STORE",
          "BUSINESS_PREMISES",
          "RECREATIONAL_HOUSE",
          "FARM",
          "BUSINESS_COLLATERAL",
          "AGRICULTURAL_LAND",
          "GARAGE",
          "BUILDING_PLOT",
          "HOUSEBOAT",
          "PLEASURE_CRAFT",
          "CARAVAN",
          "OTHER"
        ]
      },
      "RealEstateImprovement": {
        "required": [
          "amount",
          "realEstateImprovementType"
        ],
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "amount": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV].",
            "$ref": "#/components/schemas/Amount"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "realEstateImprovementType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV].",
            "$ref": "#/components/schemas/RealEstateImprovementType"
          }
        }
      },
      "RealEstateImprovementType": {
        "type": "string",
        "enum": [
          "ENERGY_EFFICIENCY",
          "ENERGY_NEUTRALITY"
        ]
      },
      "RealEstateRating": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]."
          },
          "value": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]."
          }
        }
      },
      "RealEstateRole": {
        "type": "string",
        "enum": [
          "TO_PURCHASE",
          "ALREADY_OWNED"
        ]
      },
      "RealEstateScenario": {
        "type": "string",
        "enum": [
          "NEW_CONSTRUCTION",
          "EXISTING_BUILDING",
          "RENEWAL",
          "BUILDING_PLOT"
        ]
      },
      "RealEstateSubUnit": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[realEstateScenario, realEstateBuildingType, use]. Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTV] are=[realEstateRole]. Expansion wildcards=[asset*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/RealEstate"
          },
          {
            "type": "object",
            "properties": {
              "uses": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/AssetUsage"
                }
              }
            }
          }
        ]
      },
      "RealizedIncome": {
        "required": [
          "amount"
        ],
        "type": "object",
        "properties": {
          "dateMeasured": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "format": "date"
          },
          "amount": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN].",
            "$ref": "#/components/schemas/Amount"
          }
        }
      },
      "Recovery": {
        "type": "object",
        "properties": {
          "phase": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "status": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          }
        }
      },
      "RecoveryPhase": {
        "type": "string",
        "enum": [
          "COLLECTION",
          "JUDICIAL",
          "CLOSED",
          "PREJUDICIAL",
          "JPB"
        ]
      },
      "RecoveryStatus": {
        "type": "string",
        "enum": [
          "NO_CONTACT",
          "CONTACT_TO_DEAL",
          "IDENTIFICATION",
          "OVERSEEING_IDB",
          "COMPLAINT_TO_DEAL",
          "PAYMENT_PLAN",
          "BREAKED_PAYMENT_PLAN",
          "SOLVENCY_ANALYSIS",
          "OVERSEEING_ISJ",
          "LAST_REMINDER_SOLV",
          "TRANSFER_TO_BAILIFF",
          "TRANSFER_RED_TO_BAILIFF",
          "SUMMONS_SERVED",
          "SUSPENSION_ONE_MONTH",
          "SUSPENSION_THREE_MONTHS",
          "SUSPENSION_SIX_MONTHS",
          "FINALIZE",
          "ARCHIVE",
          "IRRECOVERABLE",
          "END_BY_CUSTOMER",
          "SET_FOR_HEARING",
          "WAITING_FOR_JUDGMENT_NOTIFICATION",
          "EXECUTION",
          "PAYMENT_PLAN_BY_JUDGMENT",
          "HEIR_SEARCH",
          "LAST_AMICABLE_OFFER",
          "SPLIT",
          "HEARING",
          "NO_ROLE",
          "TRANSFER_TO_SOLVENCY_ANALYSIS",
          "SUSPENSION_TWO_MONTHS",
          "TRANSFER_TO_IRRECOVERABLE",
          "JUDICIAL_SUSPENSION_ONE_MONTH",
          "JUDICIAL_SUSPENSION_TWO_MONTHS",
          "JUDICIAL_SUSPENSION_THREE_MONTHS",
          "JUDICIAL_SUSPENSION_SIX_MONTHS",
          "JPB_IDENTIFICATION",
          "JPB_IDENTIFIED",
          "JPB_PETITION_AGREEMENT",
          "JPB_IDENTIFICATION_AFTER_AGREEMENT",
          "JPB_IDENTIFIED_AFTER_AGREEMENT",
          "JPB_PETITION_REQUESTS",
          "JPB_PETITION_SENT_TO_LAWYER",
          "JPB_PETITION_SENT_TO_BAILIFF",
          "JPB_WAITING_FOR_ROLE_SETTLEMENT",
          "JPB_WAITING_FOR_HEARING_DATE",
          "JPB_SET_FOR_HEARING",
          "JPB_HEARING",
          "JPB_PAYMENT_PLAN_BY_JUDGMENT",
          "JPB_WAITING_FOR_JUDGMENT_NOTIFICATION",
          "JPB_JUDGMENT_RECEIVED",
          "JPB_EXECUTION",
          "JPB_CLOSED_WITH_COSTS",
          "JPB_CLOSED_WITHOUT_COSTS",
          "JPB_CONTACT_TO_DEAL",
          "JPB_SUSPENSION_ONE_MONTH",
          "JPB_SUSPENSION_TWO_MONTHS",
          "JPB_SUSPENSION_THREE_MONTHS",
          "JPB_SUSPENSION_SIX_MONTHS",
          "JPB_SET_FOR_HEARING_WITH_COST",
          "JPB_SET_FOR_HEARING_COST_ONE",
          "JPB_SET_FOR_HEARING_COST_TWO",
          "MERGED",
          "LAST_REMINDER_IRR",
          "PAYMENT_PLAN_BEFORE_HEARING",
          "PETITION"
        ]
      },
      "RedemptionInterval": {
        "type": "string",
        "enum": [
          "MONTHLY",
          "QUARTERLY",
          "HALF_YEARLY",
          "YEARLY",
          "ONCE",
          "BIMONTHLY"
        ]
      },
      "RedemptionTerm": {
        "type": "object",
        "properties": {
          "remainingPrincipal": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[PAYMENT_TERMS]. Is formatted as currency.",
            "format": "double"
          },
          "amountRedemption": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS]. Is formatted as currency.",
            "format": "double"
          },
          "dueDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "amountInterest": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "term": {
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "int32"
          },
          "amountTotal": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[PAYMENT_TERMS]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "RedemptionType": {
        "type": "string",
        "enum": [
          "ANNUITY",
          "LINEAR",
          "LIFE_INSURANCE",
          "REDEMPTION_FREE",
          "CREDIT_OR_BANK_MORTGAGE",
          "INVESTMENT_MORTGAGE",
          "SAVINGS_ACCOUNT"
        ]
      },
      "RegistrationResult": {
        "type": "string",
        "enum": [
          "ACCEPTED",
          "ACCEPTED_INCOMPLETE_DATA",
          "ACCEPTED_UNDER_CONDITIONS",
          "NOT_ACCEPTED",
          "TECHNICAL_ERROR",
          "DROPOUT"
        ]
      },
      "RelatableEntity": {
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "uid": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          }
        }
      },
      "RelatedContract": {
        "required": [
          "termLength",
          "type"
        ],
        "type": "object",
        "properties": {
          "product": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI].",
            "$ref": "#/components/schemas/Product"
          },
          "contractNumber": {
            "type": "string",
            "description": "Relevant for products=[CONSUMER_LOAN, MORTGAGE_LOAN]."
          },
          "entityId": {
            "type": "string"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          },
          "externalReference": {
            "type": "string"
          },
          "remainingDurationInTerms": {
            "minimum": 0,
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI].",
            "format": "int32"
          },
          "uid": {
            "type": "string"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "termLength": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI].",
            "$ref": "#/components/schemas/PeriodLength"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "action": {
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN]. Required for requests=[Post].",
            "$ref": "#/components/schemas/ContractAction"
          },
          "durationInTerms": {
            "minimum": 1,
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI].",
            "format": "int32"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          },
          "effectiveDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI].",
            "format": "date"
          },
          "providerName": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI]. Required for requests=[Post]."
          },
          "status": {
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI].",
            "$ref": "#/components/schemas/FinancialContractStatus"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[status]. Required fields for products=[MORTGAGE_LOAN] are=[product].",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "relatedLoan": "RelatedLoan",
            "relatedInsurance": "RelatedInsurance"
          }
        }
      },
      "RelatedDocument": {
        "type": "object",
        "properties": {
          "dateTime": {
            "type": "string",
            "format": "date-time"
          },
          "originalFileName": {
            "type": "string"
          },
          "documentCategoryType": {
            "type": "string"
          },
          "documentType": {
            "type": "string"
          },
          "originalDocumentType": {
            "type": "string"
          },
          "entityId": {
            "type": "string"
          },
          "documentRef": {
            "type": "string"
          },
          "documentName": {
            "type": "string"
          },
          "entityRef": {
            "type": "string"
          },
          "source": {
            "type": "string"
          },
          "mimeType": {
            "type": "string"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "categoryVersion": {
            "type": "integer",
            "format": "int32"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "contentLanguage": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "entityRefType": {
            "type": "string"
          }
        }
      },
      "RelatedDocumentRequest": {
        "type": "object",
        "properties": {
          "originalFileName": {
            "type": "string"
          },
          "documentType": {
            "type": "string"
          },
          "originalDocumentType": {
            "type": "string"
          },
          "documentCategory": {
            "type": "string"
          },
          "documentName": {
            "type": "string"
          },
          "entityRef": {
            "type": "string"
          },
          "mimeType": {
            "type": "string"
          },
          "source": {
            "type": "string"
          },
          "s3Key": {
            "type": "string"
          },
          "categoryVersion": {
            "type": "integer",
            "format": "int32"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "contentLanguage": {
            "type": "string"
          },
          "contentType": {
            "type": "string"
          },
          "entityRefType": {
            "type": "string"
          },
          "fileStream": {
            "type": "object"
          }
        }
      },
      "RelatedEntity": {
        "type": "object",
        "properties": {
          "entityRef": {
            "type": "string"
          }
        }
      },
      "RelatedInsurance": {
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[status]. Required fields for products=[MORTGAGE_LOAN] are=[product].",
        "allOf": [
          {
            "$ref": "#/components/schemas/RelatedContract"
          },
          {
            "required": [
              "insuranceType"
            ],
            "type": "object",
            "properties": {
              "relatedProductType": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "amount": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/Amount"
              },
              "loanPartReferences": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "items": {
                  "type": "string"
                }
              },
              "valuePercentage": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as percentage.",
                "format": "double"
              },
              "lifeInsuranceValue": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/LifeInsuranceValue"
              },
              "termAmount": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "insuranceType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/InsuranceType"
              },
              "isIncludedInLTVCalculation": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              }
            }
          }
        ]
      },
      "RelatedLoan": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[principal]. Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[creditLimit, monthlyPayment].",
        "allOf": [
          {
            "$ref": "#/components/schemas/RelatedContract"
          },
          {
            "required": [
              "loanType"
            ],
            "type": "object",
            "properties": {
              "interestRate": {
                "minimum": 0,
                "type": "number",
                "description": "Is formatted as percentage.",
                "format": "double"
              },
              "assetRef": {
                "type": "string",
                "description": "ElementRef for field [asset]."
              },
              "loanType": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[MAX_LOAN, LTI].",
                "$ref": "#/components/schemas/RelatedLoanType"
              },
              "requestType": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              },
              "remainingPrincipal": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "constructionFunds": {
                "type": "array",
                "description": "Expandable using [relatedLoanConstructionFunds].",
                "items": {
                  "$ref": "#/components/schemas/ConstructionFund"
                }
              },
              "constructionFundRefs": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [constructionFunds].",
                "items": {
                  "type": "string"
                }
              },
              "relatedLoanContractType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/RelatedLoanContractType"
              },
              "principal": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI]. Is formatted as currency.",
                "format": "double"
              },
              "monthlyPayment": {
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "loanParts": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [relatedLoanParts].",
                "items": {
                  "$ref": "#/components/schemas/LoanPart"
                }
              },
              "creditLimit": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "asset": {
                "description": "Expandable using [relatedLoanAsset].",
                "discriminator": {
                  "propertyName": "type",
                  "mapping": {
                    "realEstateSubUnit": "RealEstateSubUnit",
                    "additionalRealEstate": "AdditionalRealEstate",
                    "realEstate": "RealEstate"
                  }
                },
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/RealEstateSubUnit"
                  },
                  {
                    "$ref": "#/components/schemas/AdditionalRealEstate"
                  },
                  {
                    "$ref": "#/components/schemas/RealEstate"
                  }
                ]
              },
              "loanProviderName": {
                "type": "string",
                "description": "Relevant for products=[CONSUMER_LOAN]."
              },
              "isNHG": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN]."
              }
            }
          }
        ]
      },
      "RelatedLoanContractType": {
        "type": "string",
        "enum": [
          "LOAN_PART_CONTRACT",
          "LOAN_CONTRACT",
          "RISK_INSURANCE_CONTRACT",
          "REDEMPTION_CONTRACT",
          "CONSTRUCTION_FUND_CONTRACT",
          "BRIDGE_LOAN_CONTRACT"
        ]
      },
      "RelatedLoanType": {
        "type": "string",
        "enum": [
          "PRECOMPUTED_CREDIT",
          "REVOLVING_CREDIT",
          "MAIL_ORDER_CREDIT",
          "PERSONAL_LOAN",
          "HIRE_PURCHASE",
          "OPERATIONAL_CARLEASE",
          "CREDIT_CARD",
          "REST_DEBT_MORTGAGE",
          "REST_DEBT_NHG_MORTGAGE",
          "STUDENT_LOAN",
          "PRIVATE_LOAN",
          "OTHER_LOAN",
          "EMPLOYER_LOAN",
          "CURRENT_ACCOUNT"
        ]
      },
      "Relation": {
        "type": "object",
        "properties": {
          "roles": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].",
            "items": {
              "$ref": "#/components/schemas/Role"
            }
          },
          "type": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          }
        }
      },
      "Rent": {
        "type": "object",
        "properties": {
          "duration": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/RentDurationType"
          },
          "yield": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTV]. Is formatted as currency.",
            "format": "double"
          },
          "percentage": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as percentage.",
            "format": "double"
          },
          "serviceCosts": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "pledge": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "type": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/RentType"
          },
          "salesTax": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "nrOfTenants": {
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "int32"
          }
        }
      },
      "RentDurationType": {
        "type": "string",
        "enum": [
          "TEMPORARY",
          "PERMANENT"
        ]
      },
      "RentType": {
        "type": "string",
        "enum": [
          "PARTIAL",
          "COMPLETE"
        ]
      },
      "RentalContract": {
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "unit": {
            "description": "Expandable using [rentalContractUnit].",
            "$ref": "#/components/schemas/Unit"
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "unitRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [unit]."
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "yield": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "RentalIncome": {
        "description": "Required fields for products=[CONSUMER_LOAN] are=[providerRef]. Required fields for products=[MORTGAGE_LOAN] are=[providerRef].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Income"
          },
          {
            "required": [
              "grossYearIncome"
            ],
            "type": "object",
            "properties": {
              "assetRef": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. ElementRef for field [asset]."
              },
              "rentalContractRef": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. ElementRef for field [rentalContract]."
              },
              "rentalContract": {
                "description": "Expandable using [rentalIncomeContract].",
                "$ref": "#/components/schemas/RentalContract"
              },
              "asset": {
                "description": "Expandable using [rentalIncomeAsset].",
                "discriminator": {
                  "propertyName": "type",
                  "mapping": {
                    "realEstateSubUnit": "RealEstateSubUnit",
                    "additionalRealEstate": "AdditionalRealEstate",
                    "realEstate": "RealEstate"
                  }
                },
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/RealEstateSubUnit"
                  },
                  {
                    "$ref": "#/components/schemas/AdditionalRealEstate"
                  },
                  {
                    "$ref": "#/components/schemas/RealEstate"
                  }
                ]
              },
              "grossYearIncome": {
                "type": "number",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]. Is formatted as currency.",
                "format": "double"
              }
            }
          }
        ]
      },
      "Report": {
        "required": [
          "type"
        ],
        "type": "object",
        "properties": {
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          }
        },
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "kycReport": "KycReport"
          }
        }
      },
      "RequestType": {
        "type": "string",
        "enum": [
          "CONTRACT_TRANSFER",
          "INTERNAL_CONTRACT_TRANSFER",
          "NEW_CONTRACT",
          "CREDIT_INCREASE_WITH_MORTGAGE_REGISTRATION",
          "CREDIT_INCREASE",
          "PAYMENT_DISCOUNT_REEVALUATION"
        ]
      },
      "RequiredActionCondition": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MutationCondition"
          },
          {
            "required": [
              "actionDone",
              "requiredAction"
            ],
            "type": "object",
            "properties": {
              "actionDone": {
                "type": "boolean"
              },
              "requiredAction": {
                "type": "string"
              }
            }
          }
        ]
      },
      "ResidencePermitType": {
        "type": "string",
        "enum": [
          "TYPE_I_RESIDENCE_PERMIT_TEMPORARY_REGULAR",
          "TYPE_II_RESIDENCE_PERMIT_INDEFINITELY_REGULAR",
          "TYPE_III_RESIDENCE_PERMIT_TEMPORARY_ASYLUM",
          "TYPE_IV_RESIDENCE_PERMIT_INDEFINITELY_ASYLUM",
          "TYPE_V_EU_RESIDENCE_PERMIT_FOR_LONG_TERM_RESIDENTS",
          "TYPE_EU_EER_RESIDENCE_CARD_FOR_COMMUNITY_NATIONALS",
          "UNKNOWN"
        ]
      },
      "ResidenceSituationType": {
        "type": "string",
        "enum": [
          "OWNER",
          "RENT",
          "LIVING_WITH_PARENTS",
          "ROOMS"
        ]
      },
      "ResourceRef": {
        "type": "object",
        "properties": {
          "ref": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "Reverse": {
        "type": "object",
        "properties": {
          "sequenceNumber": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "Reversed": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "RevisionPeriod": {
        "type": "string",
        "enum": [
          "VARIABLE",
          "ONE",
          "TWO",
          "FIVE",
          "SIX",
          "SEVEN",
          "TEN",
          "TWELVE",
          "FIFTEEN",
          "TWENTY",
          "THIRTY",
          "FIXED",
          "THREE",
          "FOUR",
          "EIGHT",
          "NINE",
          "FORTY",
          "TWENTYFIVE",
          "TRIMONTH"
        ]
      },
      "RevisionPeriodStatus": {
        "type": "string",
        "enum": [
          "VALID",
          "PREMIUM_CALCULATION_IMPOSSIBLE"
        ]
      },
      "RiskAssessment": {
        "type": "object",
        "properties": {
          "assessmentDate": {
            "type": "string",
            "format": "date-time"
          },
          "revisionDate": {
            "type": "string",
            "format": "date-time"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "riskAssessmentType": {
            "$ref": "#/components/schemas/RiskAssessmentType"
          },
          "risk": {
            "$ref": "#/components/schemas/RiskType"
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "explanation": {
            "type": "string"
          },
          "username": {
            "type": "string"
          }
        }
      },
      "RiskAssessmentType": {
        "type": "string",
        "enum": [
          "COMPLIANCE",
          "CREDIT"
        ]
      },
      "RiskType": {
        "type": "string",
        "enum": [
          "UNKNOWN",
          "LOW",
          "STANDARD",
          "HIGH",
          "VERY_HIGH",
          "UNACCEPTABLE"
        ]
      },
      "Role": {
        "type": "object",
        "properties": {
          "entityRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN]."
          },
          "type": {
            "type": "string"
          }
        }
      },
      "RoleMutation": {
        "required": [
          "creditExternalReference",
          "mutationRoleType",
          "partyExternalReference",
          "partyRoleType"
        ],
        "type": "object",
        "properties": {
          "mutationRoleType": {
            "$ref": "#/components/schemas/MutationRoleType"
          },
          "partyRoleType": {
            "$ref": "#/components/schemas/PartyRoleType"
          },
          "creditExternalReference": {
            "type": "string"
          },
          "partyExternalReference": {
            "type": "string"
          }
        }
      },
      "RoleMutationDetail": {
        "allOf": [
          {
            "$ref": "#/components/schemas/MutationDetail"
          },
          {
            "required": [
              "mutationDetailItems"
            ],
            "type": "object",
            "properties": {
              "mutationDetailItems": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/RoleMutationDetailItem"
                }
              }
            }
          }
        ]
      },
      "RoleMutationDetailItem": {
        "required": [
          "partyExternalReference",
          "roleMutations"
        ],
        "type": "object",
        "properties": {
          "roleMutations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RoleMutation"
            }
          },
          "partyExternalReference": {
            "type": "string"
          }
        }
      },
      "Row": {
        "type": "object",
        "properties": {
          "cells": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Cell"
            }
          },
          "ordinalPosition": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "Rule": {
        "required": [
          "category",
          "code",
          "message",
          "name"
        ],
        "type": "object",
        "properties": {
          "result": {
            "$ref": "#/components/schemas/AssessmentResultType"
          },
          "score": {
            "type": "integer",
            "format": "int64"
          },
          "code": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "motivation": {
            "$ref": "#/components/schemas/Motivation"
          },
          "name": {
            "type": "string"
          },
          "category": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/RuleCategoryType"
          },
          "message": {
            "type": "string"
          },
          "relatedEntities": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RelatedEntity"
            }
          }
        }
      },
      "RuleCategoryType": {
        "type": "string",
        "enum": [
          "POLICY_RULE",
          "RISK_RULE",
          "VALIDATION_RULE",
          "VERIFICATION_RULE",
          "FRAUD_INDICATOR_RULE"
        ]
      },
      "SearchDossiersFilter": {
        "type": "object",
        "properties": {
          "phase": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "uid": {
            "type": "string"
          },
          "number": {
            "type": "string"
          },
          "intermediaryName": {
            "type": "string"
          },
          "intermediaryNumber": {
            "type": "string"
          },
          "sourceSystemReference": {
            "type": "string"
          },
          "handling": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TechnicalDossierHandling"
            }
          },
          "applicantName": {
            "type": "string"
          },
          "labelName": {
            "type": "string"
          },
          "labelCode": {
            "type": "string"
          },
          "partyExternalReference": {
            "type": "string"
          },
          "status": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "SearchDossiersRequest": {
        "type": "object",
        "properties": {
          "filter": {
            "$ref": "#/components/schemas/SearchFilter"
          },
          "endUser": {
            "$ref": "#/components/schemas/EndUser"
          },
          "productFamilyType": {
            "$ref": "#/components/schemas/ProductFamilyType"
          },
          "offset": {
            "type": "integer",
            "format": "int32"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "loanLifeCycle": {
            "$ref": "#/components/schemas/LoanLifeCycleType"
          },
          "sorts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DossierSort"
            }
          }
        }
      },
      "SearchDossiersResponse": {
        "type": "object",
        "properties": {
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "page": {
            "type": "object"
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/DossierSummary"
            }
          }
        }
      },
      "SearchFilter": {
        "type": "object",
        "properties": {
          "fieldFilters": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FieldFilter"
            }
          },
          "operation": {
            "$ref": "#/components/schemas/FilterOperationType"
          }
        }
      },
      "SearchPartiesRequest": {
        "type": "object",
        "properties": {
          "endUser": {
            "$ref": "#/components/schemas/EndUser"
          },
          "productFamilyType": {
            "$ref": "#/components/schemas/ProductFamilyType"
          },
          "offset": {
            "type": "integer",
            "format": "int32"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "loanLifeCycle": {
            "$ref": "#/components/schemas/LoanLifeCycleType"
          },
          "party": {
            "discriminator": {
              "propertyName": "type",
              "mapping": {
                "funder": "Funder",
                "contractor": "Contractor",
                "notary": "Notary",
                "guarantor": "Guarantor",
                "calculationContractor": "CalculationContractor",
                "intermediary": "Intermediary"
              }
            },
            "oneOf": [
              {
                "$ref": "#/components/schemas/Intermediary"
              },
              {
                "$ref": "#/components/schemas/Contractor"
              },
              {
                "$ref": "#/components/schemas/Funder"
              },
              {
                "$ref": "#/components/schemas/Guarantor"
              },
              {
                "$ref": "#/components/schemas/Notary"
              },
              {
                "$ref": "#/components/schemas/CalculationContractor"
              }
            ]
          }
        }
      },
      "SearchPartiesResponse": {
        "type": "object",
        "properties": {
          "totalSize": {
            "type": "integer",
            "format": "int32"
          },
          "offset": {
            "type": "integer",
            "format": "int32"
          },
          "size": {
            "type": "integer",
            "format": "int32"
          },
          "parties": {
            "type": "array",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "funder": "Funder",
                  "contractor": "Contractor",
                  "notary": "Notary",
                  "guarantor": "Guarantor",
                  "calculationContractor": "CalculationContractor",
                  "intermediary": "Intermediary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Intermediary"
                },
                {
                  "$ref": "#/components/schemas/Contractor"
                },
                {
                  "$ref": "#/components/schemas/Funder"
                },
                {
                  "$ref": "#/components/schemas/Guarantor"
                },
                {
                  "$ref": "#/components/schemas/Notary"
                },
                {
                  "$ref": "#/components/schemas/CalculationContractor"
                }
              ]
            }
          }
        }
      },
      "SelfEmploymentType": {
        "type": "string",
        "enum": [
          "SELF_EMPLOYED_WITHOUT_STAFF",
          "SELF_EMPLOYED_WITH_STAFF",
          "FREELANCE"
        ]
      },
      "SocialBenefitIncome": {
        "description": "Required fields for products=[MORTGAGE_LOAN] calculationTypes=[LTI] are=[temporary, holidayAllowance, socialBenefitType]. Required fields for products=[CONSUMER_LOAN] calculationTypes=[MAX_LOAN] are=[socialBenefitType].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Income"
          },
          {
            "required": [
              "incomeAmount"
            ],
            "type": "object",
            "properties": {
              "temporary": {
                "type": "boolean",
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY]."
              },
              "numberOfAOWYears": {
                "minimum": 0,
                "type": "integer",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "int32"
              },
              "disablement": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN]. Is formatted as currency.",
                "format": "double"
              },
              "reEvaluationDate": {
                "type": "string",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "format": "date"
              },
              "incomeAmount": {
                "description": "Relevant for products=[MORTGAGE_LOAN, CONSUMER_LOAN].CalculationTypes=[LTI, MAX_LOAN, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/IncomeAmount"
              },
              "holidayAllowance": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/Amount"
              },
              "socialBenefitType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[LTI, ADDITIONAL_LOAN, ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
                "$ref": "#/components/schemas/SocialBenefitType"
              },
              "grossYearlyBenefit": {
                "minimum": 0,
                "type": "number",
                "description": "Relevant for products=[CONSUMER_LOAN].CalculationTypes=[MAX_LOAN]. Is formatted as currency.",
                "format": "double"
              }
            }
          }
        ]
      },
      "SocialBenefitType": {
        "type": "string",
        "enum": [
          "WIA",
          "SUSTENANCE",
          "WW",
          "WAITING_MONEY",
          "RWW",
          "ANW",
          "ANNUITY_INSURANCE",
          "AO_INSURANCE",
          "HOUSING_COSTS_INSURANCE",
          "WAJONG",
          "AOW",
          "WAZ",
          "WGA",
          "IVA",
          "WAO",
          "WAO_WITH_REINSPECTION",
          "WAO_WITHOUT_REINSPECTION",
          "SURVIVORS_PENSION",
          "ZW",
          "UGM",
          "IOW",
          "IOAW",
          "WAZO",
          "UNKNOWN"
        ]
      },
      "SortDirType": {
        "type": "string",
        "enum": [
          "ASCENDING",
          "DESCENDING"
        ]
      },
      "SortOrder": {
        "type": "string",
        "enum": [
          "ASC",
          "DESC"
        ]
      },
      "Source": {
        "type": "string",
        "enum": [
          "CLOSE_MORTGAGES_MIDOFFICE",
          "CLOSE_CONSUMER_LENING_MIDOFFICE",
          "CLOSE_BACKOFFICE",
          "CLOSE_CREDITMANAGER"
        ]
      },
      "SourceSystem": {
        "type": "object",
        "properties": {
          "reference": {
            "type": "string"
          },
          "identifier": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "StateHistoryEntry": {
        "type": "object",
        "properties": {
          "dateTime": {
            "type": "string",
            "format": "date-time"
          },
          "phase": {
            "type": "string"
          },
          "status": {
            "type": "string"
          }
        }
      },
      "Stipulation": {
        "required": [
          "description",
          "resourceRef",
          "stipulationStatus",
          "stipulationType"
        ],
        "type": "object",
        "properties": {
          "assessments": {
            "type": "array",
            "description": "Expandable using [assessments].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "manualAssessment": "ManualAssessment",
                  "automaticAssessment": "AutomaticAssessment"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/AutomaticAssessment"
                },
                {
                  "$ref": "#/components/schemas/ManualAssessment"
                }
              ]
            }
          },
          "physicalRequired": {
            "type": "boolean"
          },
          "document": {
            "$ref": "#/components/schemas/Document"
          },
          "description": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "entityId": {
            "type": "string"
          },
          "source": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/StipulationSource"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "stipulationStatus": {
            "$ref": "#/components/schemas/StipulationStatus"
          },
          "reference": {
            "maxLength": 255,
            "minLength": 1,
            "type": "string"
          },
          "resourceRef": {
            "$ref": "#/components/schemas/ResourceRef"
          },
          "originalRequired": {
            "type": "boolean"
          },
          "rejectionReasons": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "latestDeliveryDate": {
            "type": "string",
            "format": "date"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "stipulationType": {
            "type": "string"
          },
          "stipulationStatusChanges": {
            "type": "array",
            "description": "Expandable using [statusChanges].",
            "items": {
              "$ref": "#/components/schemas/StipulationStatusChange"
            }
          },
          "noteToCustomer": {
            "type": "string"
          }
        },
        "description": "Required fields for products=[MORTGAGE_LOAN] are=[originalRequired, physicalRequired, automaticAssessments, manualAssessments]."
      },
      "StipulationSource": {
        "type": "string",
        "enum": [
          "TAXCON",
          "INTERMEDIARY",
          "CONTRACTOR",
          "NOTARY",
          "UNDERWRITER"
        ]
      },
      "StipulationStatus": {
        "type": "string",
        "enum": [
          "RECEIVED",
          "TO_BE_ANALYZED",
          "ANALYZED",
          "TO_BE_CORRECTED",
          "VALID",
          "TO_BE_REPLACED",
          "MISCLASSIFIED",
          "CLASSIFICATION_AMBIGUOUS",
          "TO_BE_RECEIVED",
          "POLICY_APPROVED",
          "PROVISIONALLY_APPROVED",
          "APPROVED",
          "POLICY_REJECTED",
          "CONSISTENCY_REJECTED",
          "DEFERRED",
          "CANCELLED",
          "ERROR",
          "UNKNOWN"
        ]
      },
      "StipulationStatusChange": {
        "required": [
          "dateTime",
          "newStatus"
        ],
        "type": "object",
        "properties": {
          "dateTime": {
            "type": "string",
            "format": "date-time"
          },
          "newStatus": {
            "$ref": "#/components/schemas/StipulationStatus"
          },
          "oldStatus": {
            "$ref": "#/components/schemas/StipulationStatus"
          },
          "documentRef": {
            "type": "string"
          },
          "documentAnalysisVersion": {
            "type": "integer",
            "format": "int32"
          }
        },
        "description": "Expansion wildcards=[stipulationStatusChange*]"
      },
      "StipulationSummary": {
        "type": "object",
        "properties": {
          "documentType": {
            "type": "string"
          },
          "subject": {
            "type": "string"
          },
          "document": {
            "description": "Expandable using [stipulationDocumentSummary].",
            "$ref": "#/components/schemas/DocumentSummary"
          },
          "description": {
            "type": "string"
          },
          "entityId": {
            "type": "string"
          },
          "documentRef": {
            "type": "string"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "type": {
            "type": "string"
          },
          "reference": {
            "type": "string"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date"
          },
          "rejectionReasons": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "status": {
            "$ref": "#/components/schemas/StipulationStatus"
          },
          "analysisVersion": {
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "int32"
          },
          "documentDateTime": {
            "type": "string",
            "format": "date"
          }
        }
      },
      "Subsidy": {
        "required": [
          "receivedAmount",
          "startDate",
          "status"
        ],
        "type": "object",
        "properties": {
          "subsidyDeterminations": {
            "type": "array",
            "description": "Expandable using [subsidyDeterminations].",
            "items": {
              "$ref": "#/components/schemas/SubsidyDetermination"
            }
          },
          "endDate": {
            "type": "string",
            "format": "date"
          },
          "description": {
            "type": "string"
          },
          "entityId": {
            "type": "string"
          },
          "receivedAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "creationDate": {
            "type": "string",
            "format": "date"
          },
          "subsidyType": {
            "type": "string"
          },
          "realEstates": {
            "type": "array",
            "description": "Expandable using [realEstates].",
            "items": {
              "$ref": "#/components/schemas/RealEstate"
            }
          },
          "totalRenovationCost": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "blocked": {
            "$ref": "#/components/schemas/Blocked"
          },
          "dueAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "parties": {
            "type": "array",
            "description": "Expandable using [parties].",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "funder": "Funder",
                  "contractor": "Contractor",
                  "notary": "Notary",
                  "guarantor": "Guarantor",
                  "calculationContractor": "CalculationContractor",
                  "intermediary": "Intermediary"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Intermediary"
                },
                {
                  "$ref": "#/components/schemas/Contractor"
                },
                {
                  "$ref": "#/components/schemas/Funder"
                },
                {
                  "$ref": "#/components/schemas/Guarantor"
                },
                {
                  "$ref": "#/components/schemas/Notary"
                },
                {
                  "$ref": "#/components/schemas/CalculationContractor"
                }
              ]
            }
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "maxAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "percentageAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "startDate": {
            "type": "string",
            "format": "date"
          },
          "subsidyTerms": {
            "type": "array",
            "description": "Expandable using [subsidyTerms].",
            "items": {
              "$ref": "#/components/schemas/SubsidyTerm"
            }
          },
          "status": {
            "$ref": "#/components/schemas/SubsidyStatus"
          }
        }
      },
      "SubsidyDetermination": {
        "type": "object",
        "properties": {
          "totalRenovationCost": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "subsidyCreationDate": {
            "type": "string",
            "format": "date"
          },
          "receivedAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "source": {
            "$ref": "#/components/schemas/DeterminationSource"
          },
          "creationDate": {
            "type": "string",
            "format": "date"
          },
          "maxAmount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "SubsidyStatus": {
        "type": "string",
        "enum": [
          "CREATED",
          "PROVISIONAL",
          "DEFINITIVE"
        ]
      },
      "SubsidyTerm": {
        "type": "object",
        "properties": {
          "amount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "blocked": {
            "$ref": "#/components/schemas/Blocked"
          },
          "deedReference": {
            "type": "string"
          },
          "isExternalPayment": {
            "type": "boolean"
          },
          "termDate": {
            "type": "string",
            "format": "date"
          },
          "status": {
            "$ref": "#/components/schemas/TermStatus"
          }
        }
      },
      "SubstantialInterestIncome": {
        "description": "Required fields for products=[CONSUMER_LOAN] are=[providerRef]. Required fields for products=[MORTGAGE_LOAN] are=[providerRef].",
        "allOf": [
          {
            "$ref": "#/components/schemas/Income"
          },
          {
            "type": "object"
          }
        ]
      },
      "Suspension": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "reason": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          }
        }
      },
      "TariffDefinition": {
        "type": "object",
        "properties": {
          "baseRate": {
            "$ref": "#/components/schemas/RateDefinition"
          },
          "surcharges": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RateDefinition"
            }
          },
          "variability": {
            "$ref": "#/components/schemas/InterestVariability"
          }
        }
      },
      "TariffStatus": {
        "type": "string",
        "enum": [
          "CREATED",
          "VALIDATED",
          "DELETED",
          "TO_BE_DELETED"
        ]
      },
      "TariffsResponse": {
        "type": "object",
        "properties": {
          "tariffDefinitions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TariffDefinition"
            }
          },
          "filterableParams": {
            "type": "object"
          }
        }
      },
      "TechnicalDossierHandling": {
        "type": "string",
        "enum": [
          "AUTOMATIC",
          "MANUAL",
          "TECHNICAL_ERROR",
          "WAITING_FOR_EXTERNAL_SYSTEM"
        ]
      },
      "TermStatus": {
        "type": "string",
        "enum": [
          "CREATED",
          "TREATED"
        ]
      },
      "Transaction": {
        "type": "object",
        "properties": {
          "outstandingAfter": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "sequenceNumber": {
            "type": "integer",
            "format": "int32"
          },
          "treatment": {
            "type": "integer",
            "format": "int32"
          },
          "amount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "bookDate": {
            "type": "string",
            "format": "date"
          },
          "dueAfter": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "bookPeriod": {
            "type": "integer",
            "format": "int32"
          },
          "valueDate": {
            "type": "string",
            "format": "date"
          },
          "reverse": {
            "$ref": "#/components/schemas/Reverse"
          },
          "transactionType": {
            "type": "string"
          },
          "interestAfter": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "transactionElements": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TransactionElement"
            }
          },
          "bonusAfter": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "bookYear": {
            "type": "integer",
            "format": "int32"
          },
          "reversed": {
            "$ref": "#/components/schemas/Reversed"
          },
          "treatmentDate": {
            "type": "string",
            "format": "date"
          },
          "status": {
            "$ref": "#/components/schemas/TransactionStatus"
          }
        }
      },
      "TransactionElement": {
        "type": "object",
        "properties": {
          "number": {
            "type": "integer",
            "format": "int32"
          },
          "amount": {
            "type": "number",
            "description": "Is formatted as currency.",
            "format": "double"
          },
          "transactionElementType": {
            "type": "string"
          }
        }
      },
      "TransactionElementType": {
        "type": "string",
        "enum": [
          "UNKNOWN",
          "REFUND",
          "DUE_DATE_PRINCIPAL",
          "DUE_DATE_INTEREST",
          "PRE_PAID_PRINCIPAL",
          "PRO_RATA_INTERESTS",
          "PRE_PAYMENT_PENALTY",
          "RATECHANGE",
          "ALLOCATION_TO_PRINCIPAL",
          "ALLOCATION_TO_INTERESTS",
          "ALLOCATION_TO_PRE_PAYMENT_PENALTY",
          "ALLOCATION_TO_REMINDER_COSTS",
          "ALLOCATION_TO_INTERESTS_ON_ARREARS",
          "ALLOCATION_ON_BONUS",
          "ALLOCATION_TO_RECOVER",
          "ALLOCATION_ON_BONUS_TO_PRINCIPAL",
          "ALLOCATION_OF_BONUS_TO_INTERESTS",
          "ALLOCATION_OF_BONUS_TO_PRE_PAYMENT_PENALTY",
          "ALLOCATION_OF_BONUS_TO_COSTS",
          "ALLOCATION_OF_BONUS_TO_INTERESTS_ON_ARREARS",
          "ALLOCATION_OF_BONUS_TO_RECOVER",
          "CHARGING_OF_REMINDER_COSTS",
          "CHARGING_OF_INTERESTS_ON_ARREARS",
          "END_OF_MONTH_ACCRUAL",
          "WRITE_OFF_PENALTY",
          "REVERSED_DUE_DATE_PRINCIPAL",
          "REVERSED_DUE_DATE_INTEREST",
          "REVERSED_ALLOCATION_TO_PRINCIPAL",
          "REVERSED_ALLOCATION_TO_INTEREST",
          "REVERSED_ALLOCATION_TO_PRE_PAYMENT_PENALTY",
          "REVERSED_ALLOCATION_TO_COST",
          "REVERSED_ALLOCATION_TO_INTERESTS_ON_ARREARS",
          "REVERSED_ALLOCATION_TO_BONUS",
          "REVERSED_ALLOCATION_TO_RECOVER",
          "ALLOCATION_TO_PRE_PAID_PRINCIPAL",
          "END_OF_CREDIT_PROFIT",
          "END_OF_CREDIT_LOSS",
          "TO_RECOVER",
          "VALUE_REDUCTION",
          "ALLOCATION_TO_WRITE_OFF_PENALTY",
          "REVERSED_VALUE_REDUCTIONS",
          "REVERSED_OUTGOING_PAYMENTS",
          "CHARGING_OF_POSTAGE_COSTS",
          "CHARGING_OF_OTHER_COSTS",
          "WRITTEN_OFF_PRINCIPAL",
          "ALLOCATION_TO_WRITTEN_OFF_PRINCIPAL",
          "COST_PAYMENT_CHARGEABLE",
          "COST_PAYMENT_NONCHARGEABLE",
          "ALLOCATION_TO_COST_PAYMENT",
          "REVERSED_ALLOCATION_TO_PRE_PAID_PRINCIPAL",
          "REVERSED_ALLOCATION_TO_WRITE_OFF_PENALTY",
          "REVERSED_ALLOCATION_TO_WRITTEN_OFF_PRINCIPAL",
          "REVERSED_ALLOCATION_TO_COST_PAYMENT",
          "REVERSED_PRE_PAID_PRINCIPLE",
          "REVERSED_PRO_RATA_INTERESTS",
          "REVERSED_PRE_PAYMENT_PENALTY",
          "BONUS_TRASNFER_OUT",
          "REMISSION_OF_PAID_IOA",
          "REMISSION_OF_PAID_REMINDER_COSTS",
          "DUE_DATE_AGIO",
          "ALLOCATION_TO_OUTSTANDING_PRINCIPIAL",
          "ALLOCATION_TO_POSTAGE_COST",
          "ALLOCATION_TO_OTHER_COST",
          "REMISSION_OF_PAID_POSTAGE_COST",
          "REMISSION_OF_PAID_OTHER_COST",
          "REMISSION_OF_BONUS",
          "REDUCED_OUTSTANDING_INTEREST_FOR_WRITE_OFF",
          "REDUCED_OUTSTANDING_INTEREST_FOR_PRE_PAYMENT",
          "BONUS_ALLOCATION_TO_POSTAGE_COSTS",
          "BONUS_ALLOCATION_TO_OTHER_COSTS",
          "REVERSED_BONUS_ALLOCATION_TO_PRINCIPAL",
          "REVERSED_BONUS_ALLOCATION_TO_INTEREST",
          "REVERSED_BONUS_ALLOCATION_TO_PRE_PAYMENT_PENALTY",
          "REVERSED_BONUS_ALLOCATION_TO_REMINDER_COSTS",
          "REVERSED_BONUS_ALLOCATION_TO_INTEREST_ON_ARREARS",
          "REVERSED_BONUS_ALLOCATION_TO_POSTAGE_COSTS",
          "REVERSED_BONUS_ALLOCATION_TO_OTHER_COSTS",
          "REVERSED_CHARGING_OF_REMINDER_COST",
          "REVERSED_CHARGING_OF_POSTAGE_COST",
          "REVERSED_CHARGING_OF_OTHER_COST",
          "REVERSED_CHARGING_OF_IOA",
          "INITIAL_BOOKING_OUTSTANDING_PRINCIPAL",
          "INITIAL_BOOKING_OUTSTANDING_INTEREST",
          "INITIAL_BOOKING_OUTSTANDING_AGIO",
          "INITIAL_BOOKING_BONUS_AMOUNTS",
          "INITIAL_BOOKING_DUE_AMOUNT_PRINCIPAL",
          "INITIAL_BOOKING_DUE_AMOUNT_INTEREST",
          "INITIAL_BOOKING_DUE_AMOUNT_PRE_PAYMENT_PENALTY",
          "INITIAL_BOOKING_DUE_AMOUNT_REMINDER_COST",
          "INITIAL_BOOKING_DUE_AMOUNT_INTEREST_ON_ARREARS",
          "INITIAL_BOOKING_DUE_AMOUNT_PRE_PAID_PRINCIPAL",
          "INITIAL_BOOKING_DUE_AMOUNT_WRITE_OFF_PENALTY",
          "INITIAL_BOOKING_DUE_AMOUNT_WRITE_OFF_PRINCIPAL",
          "INITIAL_BOOKING_DUE_AMOUNT_COST_PAYMENT",
          "INITIAL_BOOKING_DUE_AMOUNT_POSTAGE_COST",
          "INITIAL_BOOKING_DUE_AMOUNT_OTHER_COST",
          "COLLECTIONS_BOOKING_DUE_PRINCIPAL",
          "COLLECTIONS_BOOKING_DUE_INTEREST",
          "COLLECTIONS_BOOKING_DUE_IOA",
          "COLLECTIONS_BOOKING_DUE_REMINDER_COST",
          "COLLECTIONS_BOOKING_DUE_POSTAGE_COST",
          "COLLECTIONS_BOOKING_DUE_OTHER_COST",
          "COLLECTIONS_BOOKING_DUE_PRE_PAYMENT_PENALTY",
          "REVERSED_ALLOCATION_TO_POSTAGE_COSTS",
          "REVERSED_ALLOCATION_TO_OTHER_COSTS",
          "ALLOCATION_OF_BONUS_TO_PRE_PAID_PRINCIPAL",
          "ALLOCATION_OF_BONUS_TO_WRITTEN_OFF_PRINCIPAL",
          "REVERSED_ALLOCATION_OF_BONUS_TO_PRE_PAID_PRINCIPAL",
          "REVERSED_ALLOCATION_OF_BONUS_TO_WRITTEN_OFF_PRINCIPAL",
          "ALLOCATION_OF_BONUS_TO_WRITE_OFF_PENALTY",
          "ALLOCATION_OF_BONUS_TO_COST_PAYMENT",
          "ALLOCATION_OF_BONUS_TO_OUTSTANDING_PRINCIPAL",
          "PAYMENT_IN_ON_CREDIT_ENDED_W_LOSS",
          "LOSS_ON_PRINCIPAL",
          "LOSS_ON_INTERESTS",
          "LOSS_ON_PRE_PAYMENT_PENALTY",
          "LOSS_ON_REMINDER_COSTS",
          "LOSS_ON_INTERESTS_ON_ARREARS",
          "LOSS_ON_POSTAGE_COSTS",
          "LOSS_ON_OTHER_COSTS",
          "LOSS_ON_PRE_PAID_PRINCIPAL",
          "LOSS_ON_WRITEN_OFF_PRINCIPAL",
          "LOSS_ON_BOOKED_WRITE_OFF_PENALTY",
          "LOSS_ON_COST_PAYMENT",
          "REVERSED_ALLOCATION_OF_BONUS_TO_WRITE_OFF_PENALTY",
          "REVERSED_ALLOCATION_OF_BONUS_TO_COST_PAYMENT",
          "REVERSED_ALLOCATION_OF_BONUS_TO_OUTSTANDING_PRINCIPAL",
          "REVERSED_ALLOCATION_TO_OUTSTANDING_PRINCIPAL",
          "REVERSED_REDUCTION_OF_OUTSTANDING_INTEREST_FOR_WRITE_OFF",
          "REVERSED_REDUCTION_OF_OUTSTANDING_INTEREST_FOR_PRE_PAYMENT",
          "REVERSED_PAYMENT_IN_ON_CREDIT_ENDED_WITH_LOSS",
          "REVERSED_LOSS_ON_PRINCIPAL",
          "REVERSED_LOSS_ON_INTERESTS",
          "REVERSED_LOSS_ON_PRE_PAYMENT_PENALTY",
          "REVERSED_LOSS_ON_REMINDER_COSTS",
          "REVERSED_LOSS_ON_INTERESTS_ON_ARREARS",
          "REVERSED_LOSS_ON_POSTAGE_COSTS",
          "REVERSED_LOSS_ON_OTHER_COSTS",
          "REVERSED_LOSS_ON_PRE_PAID_PRINCIPAL",
          "REVERSED_LOSS_ON_WRITEN_OFF_PRINCIPAL",
          "REVERSED_LOSS_ON_BOOKED_WRITE_OFF_PENALTY",
          "REVERSED_LOSS_ON_COST_PAYMENT",
          "REVERSED_END_OF_CREDIT_PROFIT",
          "REMISSION_OF_PAID_PRINCIPAL",
          "REMISSION_OF_PAID_INTEREST",
          "REMISSION_OF_PAID_WRITE_OFF_PENALTY",
          "REMISSION_OF_PAID_PRE_PAYMENT_PENALTY",
          "REMISSION_OF_NON_PAID_PRINCIPAL",
          "REMISSION_OF_NON_PAID_INTEREST",
          "REMISSION_OF_NON_PAID_PRE_PAYMENT_PENALTY",
          "REMISSION_OF_NON_PAID_WRITE_OFF_PENALTY",
          "REMISSION_OF_NON_PAID_REMINDER_COST",
          "REMISSION_OF_NON_PAID_POSTAGE_COST",
          "REMISSION_OF_NON_PAID_OTHER_COST",
          "REMISSION_OF_NON_PAID_INTEREST_ON_ARREARS",
          "REDUCTION_OF_OUTSTANDING_INTEREST_FOR_CANCELLATION",
          "REVERSED_DUE_DATE_AGIO",
          "REVERSED_WRITE_OFF_PRINCIPAL",
          "REVERSED_WRITE_OFF_PENALTY",
          "REVERSED_COLLECTIONS_BOOKING_DUE_PRINCIPAL",
          "REVERSED_COLLECTIONS_BOOKING_DUE_INTEREST",
          "REVERSED_COLLECTIONS_BOOKING_DUE_IOA",
          "REVERSED_COLLECTIONS_BOOKING_DUE_REMINDER_COST",
          "REVERSED_COLLECTIONS_BOOKING_DUE_POSTAGE_COST",
          "REVERSED_COLLECTIONS_BOOKING_DUE_PRE_PAYMENT_PENALTY",
          "INCREASE_OF_PRINCIPAL",
          "INCREASE_OF_INTEREST",
          "INCREASE_OF_PRE_PAYMENT_PENALTY",
          "INCREASE_OF_REMINDER_COST",
          "INCREASE_OF_INTEREST_ON_ARREARS",
          "INCREASE_OF_PRE_PAID_PRINCIPAL",
          "INCREASE_OF_WRITE_OFF_PENALTY",
          "INCREASE_OF_WRITTEN_OFF_PRINCIPAL",
          "INCREASE_OF_COST_PAYMENT",
          "INCREASE_OF_POSTAGE_COST",
          "INCREASE_OF_OTHER_COST",
          "DECREASE_OF_PRINCIPAL",
          "DECREASE_OF_INTEREST",
          "DECREASE_OF_PRE_PAYMENT_PENALTY",
          "DECREASE_OF_REMINDER_COST",
          "DECREASE_OF_INTEREST_ON_ARREARS",
          "DECREASE_OF_PRE_PAID_PRINCIPAL",
          "DECREASE_OF_WRITE_OFF_PENALTY",
          "DECREASE_OF_WRITTEN_OFF_PRINCIPAL",
          "DECREASE_OF_COST_PAYMENT",
          "DECREASE_OF_POSTAGE_COST",
          "DECREASE_OF_OTHER_COST",
          "DECREASE_OF_INTEREST_FOR_TAX_CERTIFICATE",
          "DECREASE_OF_PRINCIPAL_FOR_TAX_CERTIFICATE",
          "DECREASE_OF_IOA_FOR_TAX_CERTIFICATE",
          "DECREASE_OF_COSTS_FOR_TAX_CERTIFICATE",
          "DECREASE_OF_PENALTY_FOR_TAX_CERTIFICATE",
          "INCREASE_OF_INTEREST_FOR_TAX_CERTIFICATE",
          "INCREASE_OF_PRINCIPAL_FOR_TAX_CERTIFICATE",
          "INCREASE_OF_IOA_FOR_TAX_CERTIFICATE",
          "INCREASE_OF_COSTS_FOR_TAX_CERTIFICATE",
          "INCREASE_OF_PENALTY_FOR_TAX_CERTIFICATE",
          "ACCOUNTING_WRITE_OFF_ON_PRINCIPAL",
          "ACCOUNTING_WRITE_OFF_ON_INTERESTS",
          "ACCOUNTING_WRITE_OFF_ON_PRE_PAYMENT_PENALTY",
          "ACCOUNTING_WRITE_OFF_ON_REMINDER_COSTS",
          "ACCOUNTING_WRITE_OFF_ON_INTERESTS_ON_ARREARS",
          "ACCOUNTING_WRITE_OFF_ON_POSTAGE_COSTS",
          "ACCOUNTING_WRITE_OFF_ON_OTHER_COSTS",
          "ACCOUNTING_WRITE_OFF_ON_PRE_PAID_PRINCIPAL",
          "ACCOUNTING_WRITE_OFF_ON_WRITEN_OFF_PRINCIPAL",
          "ACCOUNTING_WRITE_OFF_ON_WRITE_OFF_PENALTY",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_PRINCIPAL",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_INTERESTS",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_PRE_PAYMENT_PENALTY",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_REMINDER_COSTS",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_INTERESTS_ON_ARREARS",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_POSTAGE_COSTS",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_OTHER_COSTS",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_PRE_PAID_PRINCIPAL",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_WRITEN_OFF_PRINCIPAL",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_WRITE_OFF_PENALTY",
          "ACCOUNTING_WRITE_OFF_ON_BOOKED_COST_PAYMENT",
          "TRANSFER_IN_ON_PRINCIPAL",
          "TRANSFER_IN_ON_INTEREST",
          "TRANSFER_IN_ON_PRE_PAYMENT_PENALTY",
          "TRANSFER_IN_ON_REMINDER_COST",
          "TRANSFER_IN_ON_INTEREST_ON_ARREARS",
          "TRANSFER_IN_ON_POSTAGE_COST",
          "TRANSFER_IN_ON_OTHER_COST",
          "TRANSFER_IN_ON_PRE_PAID_PRINCIPAL",
          "TRANSFER_IN_ON_WRITTEN_OFF_PRINCIPAL",
          "TRANSFER_IN_ON_WRITE_OFF_PENALTY",
          "TRANSFER_IN_ON_COST_PAYMENT",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_BOOKED_COST_PAYMENT",
          "REDUCTION_OF_LIMIT",
          "REVERSED_REDUCTION_OF_LIMIT",
          "REVERSED_COLLECTIONS_BOOKING_DUE_OTHER_COST",
          "CONSTRUCTION_DEPOT_PAYMENT",
          "INCREASE_OF_CONSTRUCTION_DEPOT_INTEREST",
          "INCREASE_OF_DUE_DATE_DEPOT_INTEREST",
          "ALLOCATION_OF_CONSTRUCTION_DEPOT_INTEREST",
          "ALLOCATION_OF_DUE_DATE_DEPOT_INTEREST",
          "WITHDRAWAL_OF_DUE_DATE_DEPOT_OUTSTANDING",
          "CONSTRUCTION_DEPOT_PRE_PAYMENT",
          "CLOSE_PRINCIPAL_OUTSTANDING",
          "CLOSE_DUE_PRINCIPAL",
          "CLOSE_DUE_INTEREST",
          "OPEN_PRINCIPAL_OUTSTANDING",
          "OPEN_DUE_PRINCIPAL",
          "OPEN_DUE_INTEREST",
          "INCREASE_CREDIT_BALANCES",
          "REVERSED_INCREASE_CREDIT_BALANCES",
          "INCREASE_OF_DUE_DATE_DEPOT_AMOUNT",
          "RESERVATION_COMMISSION",
          "REVERSED_RESERVATION_COMMISSION",
          "ALLOCATION_TO_RESERVATION_COMMISSION",
          "REVERSED_ALLOCATION_TO_RESERVATION_COMMISSION",
          "ALLOCATION_OF_BONUS_TO_RESERVATION_COMMISSION",
          "REVERSED_ALLOCATION_OF_BONUS_TO_RESERVATION_COMMISSION",
          "LOSS_ON_RESERVATION_COMMISSION",
          "REVERSED_LOSS_ON_RESERVATION_COMMISSION",
          "REMISSION_OF_NON_PAID_RESERVATION_COMMISSION",
          "INCREASE_OF_RESERVATION_COMMISSION",
          "DECREASE_OF_RESERVATION_COMMISSION",
          "ACCOUNTING_WRITE_OFF_ON_RESERVATION_COMMISSION",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_RESERVATION_COMMISSION",
          "TRANSFER_IN_ON_RESERVATION_COMMISSION",
          "PRE_PAYMENT_COSTS",
          "ALLOCATION_TO_PRE_PAYMENT_COSTS",
          "ALLOCATION_OF_BONUS_TO_PRE_PAYMENT_COSTS",
          "LOSS_ON_PRE_PAYMENT_COSTS",
          "REMISSION_OF_NON_PAID_PRE_PAYMENT_COSTS",
          "INCREASE_OF_PRE_PAYMENT_COSTS",
          "DECREASE_OF_PRE_PAYMENT_COSTS",
          "ACCOUNTING_WRITE_OFF_ON_PRE_PAYMENT_COSTS",
          "TRANSFER_IN_ON_PRE_PAYMENT_COSTS",
          "REVERSED_PRE_PAYMENT_COSTS",
          "REVERSED_ALLOCATION_TO_PRE_PAYMENT_COSTS",
          "REVERSED_ALLOCATION_OF_BONUS_TO_PRE_PAYMENT_COSTS",
          "REVERSED_LOSS_ON_PRE_PAYMENT_COSTS",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_PRE_PAYMENT_COSTS",
          "INCREASE_CONTRACTUAL_LIMIT_OF_REVOLVING_CREDIT",
          "INCREASE_ACTUAL_LIMIT_OF_REVOLVING_CREDIT",
          "DECREASE_CONTRACTUAL_LIMIT_OF_REVOLVING_CREDIT",
          "DECREASE_ACTUAL_LIMIT_OF_REVOLVING_CREDIT",
          "RETURN_DELIVERY",
          "PAYMENT_OUT_AFTER_RETURN_DELIVERY",
          "REVERSED_RETURN_DELIVERY",
          "REVERSED_PAYMENT_OUT_AFTER_RETURN_DELIVERY",
          "CHARGING_OF_MUTATION_COST_FOR_CUSTOMER",
          "CHARGING_OF_MUTATION_COST_FOR_CREDIT_PROVIDER",
          "CHARGING_OF_MUTATION_COST_FOR_INTERMEDIARY",
          "REVERSED_CHARGING_OF_MUTATION_COST_FOR_CUSTOMER",
          "REVERSED_MUTATION_COST_FOR_CREDIT_PROVIDER",
          "REVERSED_MUTATION_COST_FOR_INTERMEDIARY",
          "ALLOCATION_TO_MUTATION_COST_FOR_CUSTOMER",
          "REVERSED_ALLOCATION_TO_MUTATION_COST_FOR_CUSTOMER",
          "BONUS_ALLOCATION_OF_MUTATION_COST_FOR_CUSTOMER",
          "REVERSED_ALLOCATION_OF_BONUS_TO_MUTATION_COST_FOR_CUSTOMER",
          "LOSS_ON_MUTATION_COST_FOR_CUSTOMER",
          "REVERSED_LOSS_ON_MUTATION_COST_FOR_CUSTOMER",
          "REMISSION_OF_PAID_MUTATION_COST_FOR_CUSTOMER",
          "REMISSION_OF_NON_PAID_MUTATION_COST_FOR_CUSTOMER",
          "INCREASE_OF_MUTATION_COST_FOR_CUSTOMER",
          "DECREASE_OF_MUTATION_COST_FOR_CUSTOMER",
          "ACCOUNTING_WRITE_OFF_ON_MUTATION_COST_FOR_CUSTOMER",
          "REVERSED_ACCOUNTING_WRITE_OFF_ON_MUTATION_COST_FOR_CUSTOMER",
          "TRANSFER_IN_ON_MUTATION_COST_FOR_CUSTOMER",
          "COLLECTIONS_BOOKING_DUE_MUTATION_COST_FOR_CUSTOMER",
          "REVERSED_COLLECTIONS_BOOKING_DUE_MUTATION_COST_CUSTOMER",
          "SPLIT_CREDIT_CLOSE_PRINCIPAL",
          "SPLIT_CREDIT_CLOSE_INTEREST",
          "SPLIT_CREDIT_OPEN",
          "REVERSED_REMISSION_OF_NON_PAID_PRINCIPAL",
          "REVERSED_REMISSION_OF_NON_PAID_INTEREST",
          "REVERSED_REMISSION_OF_NON_PAID_PRE_PAYMENT_PENALTY",
          "REVERSED_REMISSION_OF_NON_PAID_WRITE_OFF_PENALTY",
          "REVERSED_REMISSION_OF_NON_PAID_REMINDER_COST",
          "REVERSED_REMISSION_OF_NON_PAID_POSTAGE_COST",
          "REVERSED_REMISSION_OF_NON_PAID_OTHER_COST",
          "REVERSED_REMISSION_OF_NON_PAID_RESERVATION_COMMISSION",
          "REVERSED_REMISSION_OF_NON_PAID_PRE_PAYMENT_COSTS",
          "REVERSED_REMISSION_OF_NON_PAID_MUTATION_COST_FOR_CUSTOMER",
          "INCREASE_OUTSTANDING",
          "DECREASE_OUTSTANDING",
          "REVERSED_INCREASE_OUTSTANDING",
          "REVERSED_DECREASE_OUTSTANDING",
          "INITIAL_BOOKING_DUE_DATE_DEPOT",
          "INITIAL_BOOKING_CONSTRUCTION_DEPOT",
          "INITIAL_BOOKING_DUE_AMOUNT_RESERVATION_COMMISSION",
          "INITIAL_BOOKING_DUE_AMOUNT_PRE_PAYMENT_COST",
          "INITIAL_BOOKING_DUE_AMOUNT_MUTATION_COST_FOR_CUSTOMER",
          "WITHDRAWAL_OF_CONSTRUCTION_DEPOT_OUTSTANDING",
          "TRANSFER_OUT_ON_CONSTRUCTION_DEPOT",
          "TRANSFER_IN_ON_CONSTRUCTION_DEPOT",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_BONUS",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_COST_PAYMENT",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_INTEREST",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_INTEREST_ON_ARREARS",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_MUTATION_COST_FOR_CUSTOMER",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_OTHER_COST",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_POSTAGE_COST",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_PRE_PAID_PRINCIPAL",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_PRE_PAYMENT_COST",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_PRE_PAYMENT_PENALTY",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_PRINCIPAL",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_REMINDER_COST",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_RESERVATION_COMMISSION",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_RECOVER",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_WRITE_OFF_PENALTY",
          "ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_WRITTEN_OFF_CAPITAL",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_BONUS",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_COST_PAYMENT",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_INTEREST",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_INTEREST_ON_ARREARS",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_MUTATION_COST_FOR_CUSTOMER",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_OTHER_COST",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_POSTAGE_COST",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_PRE_PAID_PRINCIPAL",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_PRE_PAYMENT_COST",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_PRE_PAYMENT_PENALTY",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_PRINCIPAL",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_REMINDER_COST",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_RESERVATION_COMMISSION",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_RECOVER",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_WRITE_OFF_PENALTY",
          "ALLOCATION_FROM_DUE_DATE_DEPOT_TO_WRITTEN_OFF_CAPITAL",
          "CLOSE_PRINCIPAL_OUTSTANDING_FOR_CONSTRUCTION_DEPOT",
          "OPEN_PRINCIPAL_OUTSTANDING_FOR_CONSTRUCTION_DEPOT",
          "COLLECTIONS_BOOKING_DUE_COST_PAYMENT",
          "COLLECTIONS_BOOKING_PRE_PAYMENT_COSTS",
          "COLLECTIONS_BOOKING_RESERVATION_COMMISSION",
          "REMISSION_OF_NON_PAID_COST_PAYMENT",
          "REMISSION_OF_NON_PAID_PRE_PAID_PRINCIPAL",
          "REMISSION_OF_NON_PAID_WRITE_OFF_PRINCIPAL",
          "TRANSFER_IN_ON_BONUS",
          "TRANSFER_IN_ON_OUTSTANDING_PRINCIPAL",
          "REVERSED_BONUS_ALLOCATION_TO_RECOVER",
          "REVERSED_REMISSION_OF_NON_PAID_COST_PAYMENT",
          "REVERSED_REMISSION_OF_NON_PAID_INTEREST_ON_ARREARS",
          "REVERSED_REMISSION_OF_NON_PAID_PRE_PAID_PRINCIPAL",
          "INITIAL_BOOKING_CONSTRUCTION_DEPOT_FOR_CREDIT",
          "INITIAL_BOOKING_DUE_DATE_DEPOT_FOR_CREDIT",
          "INITIAL_BOOKING_PAYMENT_OUT_TO_ESCROW",
          "TRANSFER_IN_ON_TO_RECOVER",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_BONUS",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_COST_PAYMENT",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_INTEREST",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_INTEREST_ON_ARREARS",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_MUTATION_COST_FOR_CUSTOMER",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_OTHER_COST",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_POSTAGE_COST",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_PRE_PAID_PRINCIPAL",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_PRE_PAYMENT_COST",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_PRE_PAYMENT_PENALTY",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_PRINCIPAL",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_REMINDER_COST",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_RESERVATION_COMMISSION",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_RECOVER",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_WRITE_OFF_PENALTY",
          "REVERSED_ALLOCATION_FROM_CONSTRUCTION_DEPOT_TO_WRITTEN_OFF_CAPITAL",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_BONUS",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_COST_PAYMENT",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_INTEREST",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_INTEREST_ON_ARREARS",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_MUTATION_COST_FOR_CUSTOMER",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_OTHER_COST",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_POSTAGE_COST",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_PRE_PAID_PRINCIPAL",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_PRE_PAYMENT_COST",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_PRE_PAYMENT_PENALTY",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_PRINCIPAL",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_REMINDER_COST",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_RESERVATION_COMMISSION",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_RECOVER",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_WRITE_OFF_PENALTY",
          "REVERSED_ALLOCATION_FROM_DUE_DATE_DEPOT_TO_WRITTEN_OFF_CAPITAL",
          "CREDIT_TRANSFER_IN_FROM_CONSTRUCTION_DEPOT",
          "BONUS_TRANSFER_OUT_TO_DAMAGE_FUND",
          "INCREASE_OF_DAMAGE_FUND_OUTSTANDING",
          "TRANSFER_IN_ON_DUE_DATE_DEPOT",
          "CLOSE_INTEREST_FOR_CONSTRUCTION_DEPOT",
          "OPEN_INTEREST_FOR_CONSTRUCTION_DEPOT",
          "CLOSE_PRINCIPAL_OUTSTANDING_FOR_DUE_DATE_DEPOT",
          "OPEN_PRINCIPAL_OUTSTANDING_FOR_DUE_DATE_DEPOT",
          "CLOSE_INTEREST_FOR_DUE_DATE_DEPOT",
          "OPEN_INTEREST_FOR_DUE_DATE_DEPOT",
          "CLOSE_DUE_RESERVATION_COMMISSION",
          "CLOSE_DUE_PRE_PAYMENT_PENALTY",
          "CLOSE_DUE_REMINDER_COST",
          "CLOSE_DUE_INTEREST_ON_ARREARS",
          "CLOSE_DUE_POSTAGE_COST",
          "CLOSE_DUE_OTHER_COST",
          "CLOSE_DUE_PRE_PAYMENT_COST",
          "CLOSE_DUE_PRE_PAID_PRINCIPAL",
          "CLOSE_DUE_WRITE_OFF_PRINCIPAL",
          "CLOSE_DUE_WRITE_OFF_PENALTY",
          "CLOSE_DUE_COST_PAYMENT",
          "CLOSE_DUE_MUTATION_COST_FOR_CUSTOMER",
          "OPEN_DUE_RESERVATION_COMMISSION",
          "OPEN_DUE_PRE_PAYMENT_PENALTY",
          "OPEN_DUE_REMINDER_COST",
          "OPEN_DUE_INTEREST_ON_ARREARS",
          "OPEN_DUE_POSTAGE_COST",
          "OPEN_DUE_OTHER_COST",
          "OPEN_DUE_PRE_PAYMENT_COST",
          "OPEN_DUE_PRE_PAID_PRINCIPAL",
          "OPEN_DUE_WRITE_OFF_PRINCIPAL",
          "OPEN_DUE_WRITE_OFF_PENALTY",
          "OPEN_DUE_COST_PAYMENT",
          "OPEN_DUE_MUTATION_COST_FOR_CUSTOMER",
          "CLOSE_BONUS_AMOUNT",
          "OPEN_BONUS_AMOUNT",
          "CLOSE_DUE_TO_RECOVER",
          "OPEN_DUE_TO_RECOVER",
          "INITIAL_BOOKING_DUE_DATE_DEPOT_INTEREST_AMOUNT",
          "INITIAL_BOOKING_CONSTRUCTION_DEPOT_INTEREST_AMOUNT",
          "INCREASE_OF_DUE_DATE_DEPOT_OUTSTANDING_CORRECTION",
          "INCREASE_OF_DUE_DATE_DEPOT_INTEREST_CORRECTION",
          "INCREASE_OF_CONSTRUCTION_DEPOT_OUTSTANDING_CORRECTION",
          "INCREASE_OF_CONSTRUCTION_DEPOT_INTEREST_CORRECTION",
          "DECREASE_OF_DUE_DATE_DEPOT_OUTSTANDING_CORRECTION",
          "REVERSED_CONSTRUCTION_DEPOT_PAYMENT",
          "DECREASE_OF_DUE_DATE_DEPOT_INTEREST_CORRECTION",
          "DECREASE_OF_CONSTRUCTION_DEPOT_OUTSTANDING_CORRECTION",
          "DECREASE_OF_CONSTRUCTION_DEPOT_INTEREST_CORRECTION",
          "PAYMENT_TO_ESCROW",
          "REVERSED_PAYMENT_TO_ESCROW",
          "REVERSED_BONUS_REFUND",
          "REVERSED_COST_PAYMENT_CHARGEABLE",
          "REVERSED_COST_PAYMENT_NONCHARGEABLE",
          "END_OF_MONTH_ACCRUAL_FOR_CONSTRUCTION_DEPOT",
          "END_OF_MONTH_ACCRUAL_FOR_DUE_DATE_DEPOT",
          "BONUS_TRANSFER_OUT_TO_CONSTRUCTION_DEPOT",
          "BONUS_TRANSFER_OUT_TO_DUE_DATE_DEPOT",
          "INCREASE_OF_CONSTRUCTION_DEPOT_OUTSTANDING",
          "INCREASE_OF_DUE_DATE_DEPOT_OUTSTANDING",
          "RECOVERED_NOTARY_PAYMENT",
          "PAYMENT_TO_NHG",
          "INITIAL_BOOKING_PAYMENT_TO_NHG",
          "INITIAL_BOOKING_PAYMENT_OUT",
          "TRANSFER_IN_ON_DUE_DATE_DEPOT_INTEREST",
          "TRANSFER_IN_ON_CONSTRUCTION_DEPOT_INTEREST",
          "THIRD_PARTY_DUE_INTEREST",
          "THIRD_PARTY_DUE_PRO_RATA_INTEREST",
          "REVERSED_THIRD_PARTY_DUE_INTEREST",
          "REVERSED_THIRD_PARTY_DUE_PRO_RATA_INTEREST",
          "ALLOCATION_TO_THIRD_PARTY_DUE_INTEREST",
          "TRANSFER_OUT_TO_OTHER_CREDIT",
          "INCREASE_OF_THIRD_PARTY_DUE_INTEREST_CORRECTION",
          "DECREASE_OF_THIRD_PARTY_DUE_INTEREST_CORRECTION",
          "TRANSFER_OUT_ON_DUE_DATE_DEPOT_OUTSTANDING",
          "CREDIT_TRANSFER_IN_FROM_DUE_DATE_DEPOT",
          "DISCHARGED_DUE_DATE_INTEREST",
          "NON_DISCHARGED_DUE_DATE_INTEREST",
          "DISCHARGED_PRO_RATA_INTERESTS",
          "NON_DISCHARGED_PRO_RATA_INTERESTS",
          "REVERSED_DISCHARGED_DUE_DATE_INTEREST",
          "REVERSED_NON_DISCHARGED_DUE_DATE_INTEREST",
          "REVERSED_DISCHARGED_PRO_RATA_INTERESTS",
          "REVERSED_NON_DISCHARGED_PRO_RATA_INTERESTS",
          "INITIAL_BOOKING_TRANSFER_TO_CREDIT",
          "INITIAL_BOOKING_CONTRACTUAL_LIMIT",
          "CAPITALIZE_INTEREST",
          "REVERSE_CAPITALIZE_INTEREST",
          "TO_BE_CAPITALIZED_INTEREST",
          "REVERSED_TO_BE_CAPITALIZED_INTEREST",
          "TO_BE_CAPITALIZED_PRO_RATA_INTEREST",
          "REVERSED_TO_BE_CAPITALIZED_PRO_RATA_INTEREST",
          "REVERSED_TRANSFER_OUT_TO_OTHER_CREDIT",
          "AMORTIZATION_MODIFICATION",
          "INITIAL_BOOKING_AMORTIZATION_MODIFICATION",
          "INCREASE_OF_AMORTIZATION_MODIFICATION_CORRECTION",
          "DECREASE_OF_AMORTIZATION_MODIFICATION_CORRECTION",
          "REVERSED_TRANSFER_IN_FROM_CONSTRUCTION_DEPOT",
          "REVERSED_TRANSFER_IN_FROM_DUE_DATE_DEPOT",
          "REVERSED_RECOVERED_NOTARY_PAYMENT",
          "INCREASE_OF_AMORTIZATION_MODIFICATION",
          "DECREASE_OF_AMORTIZATION_MODIFICATION",
          "TEMPORARILY_REVERSED_PAYMENT_OUT",
          "REACTIVATED_PAYMENT_OUT",
          "INITIAL_BOOKING_OF_SUBSIDY",
          "SUBSIDY_PAYMENT",
          "DECREASE_OF_SUBSIDY_OUTSTANDING_CORRECTION",
          "TRANSFER_OUT_ON_CONSTRUCTION_DEPOT_FROM_OUTSTANDING",
          "TRANSFER_OUT_ON_CONSTRUCTION_DEPOT_FROM_INTEREST",
          "TRANSFER_OUT_ON_DUE_DATE_DEPOT_INTEREST",
          "REVERSED_ALLOCATION_TO_THIRD_PARTY_DUE_INTEREST",
          "CLOSE_ECONOMICAL_OWNER_FOR_PAYMENT_TO_ESCROW",
          "OPEN_ECONOMICAL_OWNER_FOR_PAYMENT_TO_ESCROW"
        ]
      },
      "TransactionHistoryType": {
        "type": "string",
        "enum": [
          "CREDIT",
          "DUE_DATE_DEPOT",
          "CONSTRUCTION_DEPOT"
        ]
      },
      "TransactionStatus": {
        "type": "string",
        "enum": [
          "CREATED",
          "VALIDATED",
          "TREATED",
          "BOOKED",
          "REVERSED"
        ]
      },
      "TransactionType": {
        "type": "string",
        "enum": [
          "UNKNOWN",
          "PAYMENT_OUT",
          "REFUND",
          "DUE_DATE",
          "PREPAYMENT",
          "RATE_CHANGE",
          "PAYMENT_ALLOCATION",
          "BONUS_ALLOCATION",
          "CHARGING_OF_COSTS",
          "CHARGING_OF_INTEREST_ON_ARREARS",
          "END_OF_MONTH_ACCRUAL",
          "WRITE_OFF",
          "REVERSED_DUE_DATE",
          "REVERSED_PAYMENT_ALLOCATION",
          "PRECOMPUTED_SPREAD_COMMISSION",
          "PRECOMPUTED_BASIC_COMMISSION",
          "PRECOMPUTED_PORTFOLIO_COMMISSION",
          "END_OF_CREDIT_PROFIT",
          "TO_RECOVER",
          "VALUE_REDUCTION",
          "FORCED_RECOVERY",
          "REVERSED_VALUE_REDUCTION",
          "REVERSED_PAYMENT_OUT",
          "REMISSION_OF_PAID_AMOUNTS",
          "COST_PAYMENT",
          "REVERSED_PREPAYMENT",
          "BONUS_TRANSFER_OUT",
          "REVERSED_BONUS_ALLOCATION",
          "PAYMENT_IN_FROM_CI",
          "REMISSION_OF_NON_PAID_AMOUNTS",
          "REMISSION_OF_BONUS",
          "REDUCTION_OF_OUTSTANDING_INTEREST",
          "REVERSED_CHARGING_OF_IOA",
          "REVERSED_CHARGING_OF_COSTS",
          "INITIAL_BOOKING_CREDIT_BALANCES",
          "INITIAL_BOOKING_BONUS_AMOUNTS",
          "COLLECTIONS_BOOKING_DUE_AMOUNTS",
          "PAYMENT_I_NON_CREDIT_ENDED_W_LOSS",
          "END_OF_CREDIT_LOSS",
          "REVERSED_REDUCTION_OF_OUTSTANDING_INTEREST",
          "REVERSED_PAYMENT_I_NON_CREDIT_ENDED_WITH_LOSS",
          "REVERSED_END_OF_CREDIT_LOSS",
          "REVERSED_END_OF_CREDIT_PROFIT",
          "REVERSED_PAYMENT_IN_FROM_CI",
          "REVERSED_WRITE_OFF",
          "REVERSED_COLLECTIONS_BOOKING_DUE_AMOUNTS",
          "DECREASE_OF_DUE_AMOUNT_CORRECTION",
          "INCREASE_OF_DUE_AMOUNT_CORRECTION",
          "DECREASE_OF_TAX_CERTIFICATE_VALUE",
          "INCREASE_OF_TAX_CERTIFICATE_VALUE",
          "ACCOUNTING_WRITE_OFF",
          "REVERSED_ACCOUNTING_WRITE_OFF",
          "BONUS_TRANSFER_IN",
          "REDUCTION_OF_LIMIT",
          "REVERSED_REDUCTION_OF_LIMIT",
          "CONSTRUCTION_DEPOT_PAYMENT",
          "INCREASE_OF_CONSTRUCTION_DEPOT_INTEREST",
          "INCREASE_OF_DUE_DATE_DEPOT_INTEREST",
          "CONSTRUCTION_DEPOT_ALLOCATION",
          "DUE_DATE_DEPOT_ALLOCATION",
          "CONSTRUCTION_DEPOT_FOR_CREDIT_ALLOCATION",
          "DUE_DATE_DEPOT_FOR_CREDIT_ALLOCATION",
          "PREPAYMENT_FROM_DEPOT_FOR_MORTGAGE_NL",
          "PARTIAL_PREPAYMENT_FOR_MORTGAGE_NL",
          "COMPLETE_PREPAYMENT_FOR_MORTGAGE_NL",
          "CONSTRUCTION_DEPOT_PREPAYMENT",
          "CLOSE_ECONOMICAL_OWNER",
          "OPEN_ECONOMICAL_OWNER",
          "REVERSED_CONSTRUCTION_DEPOT_ALLOCATION",
          "REVERSED_DUE_DATE_DEPOT_ALLOCATION",
          "REVERSED_PREPAYMENT_FROM_DEPOT_FOR_MORTGAGE_NL",
          "REVERSED_PARTIAL_PREPAYMENT_FOR_MORTGAGE_NL",
          "REVERSED_COMPLETE_PREPAYMENT_FOR_MORTGAGE_NL",
          "CREDIT_MUTATION_ACTIVATION",
          "REVERSED_CREDIT_MUTATION_ACTIVATION",
          "INCREASE_OF_DUE_DATE_DEPOT_AMOUNT",
          "INCREASE_ACTUAL_LIMIT_OF_REVOLVING_CREDIT",
          "DECREASE_ACTUAL_LIMIT_OF_REVOLVING_CREDIT",
          "INCREASE_CONTRACTUAL_LIMIT_OF_REVOLVING_CREDIT",
          "DECREASE_CONTRACTUAL_LIMIT_OF_REVOLVING_CREDIT",
          "RETURN_DELIVERY",
          "PAYMENT_OUT_AFTER_RETURN_DELIVERY",
          "REVERSED_RETURN_DELIVERY",
          "REVERSED_PAYMENT_OUT_AFTER_RETURN_DELIVERY",
          "SPLIT_CREDIT_CLOSE",
          "SPLIT_CREDIT_OPEN",
          "PR_OR_ATA_WRITE_OFF",
          "REVERSED_REMISSION_OF_NON_PAID_DUE_AMOUNTS",
          "REVERSED_PR_OR_ATA_WRITE_OFF",
          "INCREASE_OUTSTANDING",
          "DECREASE_OUTSTANDING",
          "REVERSED_INCREASE_OUTSTANDING",
          "REVERSED_DECREASE_OUTSTANDING",
          "INITIAL_BOOKING_DUE_AMOUNTS",
          "INITIAL_BOOKING_DUE_DATE_DEPOT",
          "INITIAL_BOOKING_CONSTRUCTION_DEPOT",
          "CONSTRUCTION_DEPOT_TRANSFER_OUT",
          "CONSTRUCTION_DEPOT_TRANSFER_IN",
          "CLOSE_ECONOMICAL_OWNER_FOR_CONSTRUCTION_DEPOT",
          "OPEN_ECONOMICAL_OWNER_FOR_CONSTRUCTION_DEPOT",
          "INITIAL_BOOKING_NEW_CREDIT",
          "CREDIT_TRANSFER_IN_FROM_CONSTRUCTION_DEPOT",
          "BONUS_TRANSFER_OUT_TO_DAMAGE_FUND",
          "DAMAGE_FUND_TRANSFER_IN_FROM_CREDIT_BONUS",
          "DUE_DATE_DEPOT_TRANSFER_IN",
          "CLOSE_ECONOMICAL_OWNER_FOR_DUE_DATE_DEPOT",
          "OPEN_ECONOMICAL_OWNER_FOR_DUE_DATE_DEPOT",
          "INCREASE_OF_DUE_DATE_DEPOT_OUTSTANDING_CORRECTION",
          "INCREASE_OF_DUE_DATE_DEPOT_INTEREST_CORRECTION",
          "INCREASE_OF_CONSTRUCTION_DEPOT_OUTSTANDING_CORRECTION",
          "REVERSED_CONSTRUCTION_DEPOT_PAYMENT",
          "INCREASE_OF_CONSTRUCTION_DEPOT_INTEREST_CORRECTION",
          "DECREASE_OF_DUE_DATE_DEPOT_OUTSTANDING_CORRECTION",
          "DECREASE_OF_DUE_DATE_DEPOT_INTEREST_CORRECTION",
          "PAYMENT_TO_ESCROW",
          "REVERSED_PAYMENT_TO_ESCROW",
          "REVERSED_BONUS_REFUND",
          "REVERSED_COST_PAYMENT",
          "END_OF_MONTH_ACCRUAL_FOR_CONSTRUCTION_DEPOT",
          "END_OF_MONTH_ACCRUAL_FOR_DUE_DATE_DEPOT",
          "DECREASE_OF_CONSTRUCTION_DEPOT_OUTSTANDING_CORRECTION",
          "DECREASE_OF_CONSTRUCTION_DEPOT_INTEREST_CORRECTION",
          "BONUS_TRANSFER_OUT_TO_CONSTRUCTION_DEPOT",
          "BONUS_TRANSFER_OUT_TO_DUE_DATE_DEPOT",
          "CONSTRUCTION_DEPOT_TRANSFER_IN_FROM_CREDIT_BONUS",
          "DUE_DATE_DEPOT_TRANSFER_IN_FROMC_REDIT_BONUS",
          "RECOVERED_NOTARY_PAYMENT",
          "PAYMENT_TO_NHG",
          "THIRD_PARTY_DUE",
          "REVERSED_THIRD_PARTY_DUE",
          "THIRD_PARTY_PAYMENT",
          "TRANSFER_IN_FROM_OTHER_CREDIT",
          "TRANSFER_OUT_TO_OTHER_CREDIT",
          "INCREASE_OF_THIRD_PARTY_DUE_INTEREST_CORRECTION",
          "DECREASE_OF_THIRD_PARTY_DUE_INTEREST_CORRECTION",
          "DUE_DATE_DEPOT_TRANSFER_OUT",
          "CREDIT_TRANSFER_IN_FROM_DUE_DATE_DEPOT",
          "CONSTRUCTION_DEPOT_ALLOCATION_FOR_PREPAYMENT",
          "BONUS_ALLOCATION_FROM_DEPOT_FOR_PREPAYMENT",
          "REVERSED_CONSTRUCTION_DEPOT_ALLOCATION_FOR_PREPAYMENT",
          "REVERSED_BONUS_ALLOCATION_FROM_DEPOT_FOR_PREPAYMENT",
          "CAPITALIZE_INTEREST",
          "REVERSED_CAPITALIZE_INTEREST",
          "REVERSED_TRANSFER_OUT_TO_OTHER_CREDIT",
          "REVERSED_BONUS_TRANSFER_IN",
          "REVERSED_TRANSFER_IN_FROM_CONSTRUCTION_DEPOT",
          "REVERSED_TRANSFER_IN_FROM_DUE_DATE_DEPOT",
          "AMORTIZATION_MODIFICATION",
          "INITIAL_BOOKING_AMORTIZATION_MODIFICATION",
          "AMORTIZATION_MODIFICATION_CORRECTION",
          "REVERSED_RECOVERED_NOTARY_PAYMENT",
          "PAYMENT_IN_NHG",
          "REVERSED_PAYMENT_IN_NHG",
          "TEMPORARILY_REVERSED_PAYMENT_OUT",
          "REACTIVATED_PAYMENT_OUT",
          "INITIAL_BOOKING_OF_SUBSIDY",
          "SUBSIDY_PAYMENT",
          "DECREASE_OF_SUBSIDY_OUTSTANDING_CORRECTION",
          "SPLIT_CREDIT_CLOSE_DUE_AMOUNTS",
          "SPLIT_CREDIT_CLOSE_BONUS_AMOUNTS",
          "SPLIT_CREDIT_OPEN_DUE_AMOUNTS",
          "SPLIT_CREDIT_OPEN_BONUS_AMOUNTS",
          "REVERSED_THIRD_PARTY_PAYMENT",
          "CLOSE_ECONOMICAL_OWNER_FOR_PAYMENT_TO_ESCROW",
          "OPEN_ECONOMICAL_OWNER_FOR_PAYMENT_TO_ESCROW"
        ]
      },
      "Transactions": {
        "type": "object",
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Transaction"
            }
          }
        }
      },
      "Transfer": {
        "type": "object",
        "properties": {
          "date": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "returnAccountRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [returnAccount]."
          },
          "providerComparant": {
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [providerComparant].",
            "$ref": "#/components/schemas/Person"
          },
          "notaryFundsSpecificationRequired": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "uid": {
            "type": "string"
          },
          "deedTemplate": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/DeedTemplate"
          },
          "totalPayment": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "transferNotes": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "$ref": "#/components/schemas/TransferNote"
            }
          },
          "notaryPayment": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/NotaryPayment"
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "notaryContactPerson": {
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [notaryContactPerson].",
            "$ref": "#/components/schemas/Person"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "suspension": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/Suspension"
          },
          "lastDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "providerComparantRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [providerComparant]."
          },
          "transferFund": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/TransferFund"
          },
          "lastDateAfterExtension": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "entityId": {
            "type": "string"
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "notaryContactPersonRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [notaryContactPerson]."
          },
          "externalReference": {
            "type": "string"
          },
          "isDateDefinitive": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "returnAccount": {
            "description": "Relevant for products=[MORTGAGE_LOAN]. Expandable using [returnAccount].",
            "$ref": "#/components/schemas/BankAccount"
          },
          "relations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Relation"
            }
          }
        }
      },
      "TransferCost": {
        "required": [
          "amount"
        ],
        "type": "object",
        "properties": {
          "amount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "description": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "transferCostType": {
            "$ref": "#/components/schemas/TransferCostType"
          }
        }
      },
      "TransferCostType": {
        "type": "string",
        "enum": [
          "APPRAISAL_REPORT",
          "CONSTRUCTION_REPORT",
          "FINANCING",
          "ACQUISITION",
          "LOAN_AMOUNT",
          "BRIDGE_LOAN_AMOUNT",
          "DEPOT_AMOUNT",
          "MORTGAGE_GUARANTEE_FEE",
          "COMMITMENT_FEE",
          "BANK_GUARANTEE",
          "BRIDGE_COSTS",
          "INTEREST_DEBIT",
          "INTEREST_CREDIT",
          "NHG_COSTS",
          "DISAGIO",
          "INVESTMENT",
          "BRIDGE_LOAN_REST",
          "BORROWING_CAPACITY",
          "CONSTRUCTION_DEPOT_NEW_CONSTRUCTION",
          "CONSTRUCTION_TERM_1",
          "CONSTRUCTION_TERM_2",
          "CONSTRUCTION_TERM_3",
          "CONSTRUCTION_TERM_4",
          "CREDIT_WITHDRAWAL_NOTARY_CREDIT",
          "CONSTRUCTION_EXTRA_WORK",
          "NOTARY_FEE",
          "CREDIT_WITHDRAWAL_NOTARY_DEBIT",
          "PLOT_ACQUISITION",
          "INTEREST_DEPOT_AMOUNT",
          "PREMIUM_DEPOT_AMOUNT",
          "CREDIT_WITHDRAWAL_PROVIDER_CREDIT",
          "OTHER_NOTARY_COSTS_CREDIT",
          "OTHER_NOTARY_COSTS_DEBIT",
          "OTHER_PROVIDER_COSTS_CREDIT",
          "OTHER_PROVIDER_COSTS_DEBIT"
        ]
      },
      "TransferFund": {
        "type": "object",
        "properties": {
          "ownAssets": {
            "minimum": 0,
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "TransferNote": {
        "required": [
          "messageType"
        ],
        "type": "object",
        "properties": {
          "transferCosts": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/TransferCost"
            }
          },
          "ownAssets": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          },
          "messageType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/TransferNoteType"
          },
          "paymentAmount": {
            "type": "number",
            "description": "Relevant for products=[MORTGAGE_LOAN]. Is formatted as currency.",
            "format": "double"
          }
        }
      },
      "TransferNoteType": {
        "type": "string",
        "enum": [
          "TRANSFER_INSTRUCTIONS",
          "NOTARY_FUNDS_SPECIFICATION",
          "CLOSING_NOTE"
        ]
      },
      "TransferTransaction": {
        "type": "object",
        "properties": {
          "costs": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Cost"
            }
          },
          "buyerCosts": {
            "type": "boolean"
          },
          "transferDate": {
            "type": "string",
            "format": "date"
          },
          "originalTransferDate": {
            "type": "string",
            "format": "date"
          },
          "notaryRequired": {
            "type": "boolean"
          }
        }
      },
      "Unit": {
        "type": "object",
        "properties": {
          "externalReference": {
            "type": "string"
          },
          "assetRef": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "preliminaryExternalReference": {
            "type": "string"
          },
          "independent": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          },
          "freeFields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FreeFieldValue"
            }
          },
          "assetUsages": {
            "type": "array",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "items": {
              "$ref": "#/components/schemas/AssetUsage"
            }
          },
          "entityId": {
            "type": "string"
          },
          "links": {
            "type": "array",
            "items": {
              "type": "object"
            }
          },
          "expands": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      },
      "UpdateDeclarationResult": {
        "required": [
          "success"
        ],
        "type": "object",
        "properties": {
          "reference": {
            "type": "string"
          },
          "success": {
            "type": "boolean"
          },
          "errorMessage": {
            "type": "string"
          },
          "declaration": {
            "$ref": "#/components/schemas/Declaration"
          }
        }
      },
      "UploadFileResponse": {
        "type": "object",
        "properties": {
          "fileRef": {
            "type": "string"
          }
        }
      },
      "UploadStipulationDocumentResponse": {
        "type": "object",
        "properties": {
          "documentRef": {
            "type": "string"
          }
        }
      },
      "Use": {
        "type": "object",
        "properties": {
          "applicantResidence": {
            "type": "boolean",
            "description": "Relevant for products=[MORTGAGE_LOAN]."
          }
        }
      },
      "UserClaim": {
        "type": "object",
        "properties": {
          "claimDateTime": {
            "type": "string",
            "format": "date-time"
          },
          "user": {
            "type": "string"
          }
        }
      },
      "UserType": {
        "type": "string",
        "enum": [
          "OWNER",
          "TENANT"
        ]
      },
      "Variability": {
        "required": [
          "variabilityType"
        ],
        "type": "object",
        "properties": {
          "currentFixedRateStartDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "date"
          },
          "currentFixedRateEndDate": {
            "type": "string",
            "description": "Relevant for products=[MORTGAGE_LOAN].CalculationTypes=[ADDITIONAL_LOAN_PAYMENT_CAPACITY].",
            "format": "date"
          },
          "durationInMonths": {
            "minimum": 0,
            "type": "integer",
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "format": "int32"
          },
          "variabilityType": {
            "description": "Relevant for products=[MORTGAGE_LOAN].",
            "$ref": "#/components/schemas/VariabilityType"
          }
        }
      },
      "VariabilityType": {
        "type": "string",
        "enum": [
          "FIXED",
          "VARIABLE"
        ]
      },
      "Warranty": {
        "description": "Expansion wildcards=[collateral*]",
        "allOf": [
          {
            "$ref": "#/components/schemas/Collateral"
          },
          {
            "type": "object",
            "properties": {
              "assets": {
                "type": "array",
                "description": "Expandable using [collateralAssets].",
                "items": {
                  "discriminator": {
                    "propertyName": "type",
                    "mapping": {
                      "realEstateSubUnit": "RealEstateSubUnit",
                      "additionalRealEstate": "AdditionalRealEstate",
                      "realEstate": "RealEstate"
                    }
                  },
                  "oneOf": [
                    {
                      "$ref": "#/components/schemas/RealEstateSubUnit"
                    },
                    {
                      "$ref": "#/components/schemas/AdditionalRealEstate"
                    },
                    {
                      "$ref": "#/components/schemas/RealEstate"
                    }
                  ]
                }
              },
              "assetRefs": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN]. ElementRef for field [assets].",
                "items": {
                  "type": "string"
                }
              },
              "warrantyType": {
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "$ref": "#/components/schemas/WarrantyType"
              },
              "loanRefs": {
                "type": "array",
                "description": "Relevant for products=[MORTGAGE_LOAN].",
                "items": {
                  "type": "string"
                }
              }
            }
          }
        ]
      },
      "WarrantyType": {
        "type": "string",
        "enum": [
          "PLEDGE",
          "REGISTRATION",
          "AUTHORIZATION",
          "NOTARIAL_DEED"
        ]
      },
      "ZoningType": {
        "type": "string",
        "enum": [
          "RESIDE",
          "COMPANY",
          "HYBRID",
          "RETAIL",
          "OFFICE",
          "SOCIETAL",
          "SPORT",
          "VALUE_OF_CULTURE_HISTORY"
        ]
      }
    }
  }
};

export default oas;
