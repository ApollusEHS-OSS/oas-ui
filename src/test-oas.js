const oas = {
  "openapi": "3.0.1",
  "info": {
    "title": "Test API",
    "description": "Test description",
    "version": "1.0.0"
  },
  "paths": {
    "/cars/{carId}/photos": {
      "post": {
        "tags": [
          "car-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "uploadCarPhotoUsingPOST",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "carId",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody. Test requestBody interceptor",
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "multipartFile": {
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
          "202": {
            "description": "Accepted"
          }
        }
      }
    },
    "/cars/{carId}": {
      "get": {
        "tags": [
          "car-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "getCarUsingGET",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "carId",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
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
                  "$ref": "#/components/schemas/Car"
                }
              }
            }
          }
        }
      }
    },
    "/dummy/{id}/subpath": {
      "get": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "subpathUsingGET",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "headerA",
            "in": "header",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "headerB",
            "in": "header",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "requestParamA",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            },
            "examples": {
              "example_A": {
                "description": "CustomDescription",
                "value": "TestExampleResolvedWithKey=CUSTOM_EXAMPLE_KEY_1"
              }
            }
          },
          {
            "name": "requestParamB",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "requestParamC",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
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
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "complexPostUsingPOST",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "headerA",
            "in": "header",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "headerB",
            "in": "header",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "requestParamA",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "requestParamB",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "requestParamC",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody. Test requestBody interceptor",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ValidationDummy"
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
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      }
    },
    "/dummy/onlyRequestParams": {
      "get": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "onlyRequestParamsUsingGET",
        "deprecated": true,
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "deprecated": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "requestParamA",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "requestParamB",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            },
            "examples": {
              "example_1": {
                "description": "example_1_description",
                "value": "moreExamples_1"
              },
              "example_2": {
                "description": "example_2_description",
                "value": "moreExamples_2"
              }
            }
          },
          {
            "name": "requestParamC",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": false,
            "deprecated": true,
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
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      }
    },
    "/cars": {
      "get": {
        "tags": [
          "car-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "getCarsUsingGET",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "model",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "torque",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
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
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Car"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "car-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "createCarUsingPOST",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "source",
            "in": "header",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody. Test requestBody interceptor",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Car"
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
                  "$ref": "#/components/schemas/Car"
                }
              }
            }
          }
        }
      }
    },
    "/dummy/fileWithoutResponseAnnotation": {
      "get": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "getFileWithoutResponseAnnotationUsingGET",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
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
              "application/octet-stream": {
                "schema": {
                  "type": "string",
                  "format": "binary"
                }
              }
            }
          }
        }
      }
    },
    "/cars/{carId}/documents": {
      "post": {
        "tags": [
          "car-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "uploadCarDocumentsUsingPOST",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "source",
            "in": "header",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "carId",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "type",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody. Test requestBody interceptor",
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "documentFile": {
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
                  "$ref": "#/components/schemas/Car"
                }
              }
            }
          }
        }
      }
    },
    "/dummy/requestBodyList": {
      "post": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "requestBodyListUsingPOST",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody. Test requestBody interceptor",
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/ValidationDummy"
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
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      }
    },
    "/dummy": {
      "post": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "createUsingPOST",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody. Test requestBody interceptor",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ValidationDummy"
              },
              "examples": {
                "example_A": {
                  "value": "{\"bodyExample\":\"value\"}"
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
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      }
    },
    "/dummy/requestParamList": {
      "get": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "requestParamListUsingGET",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "validationDummies",
            "in": "query",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ValidationDummy"
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      }
    },
    "/dummy/{id}": {
      "put": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "createOrReplaceUsingPUT",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody. Test requestBody interceptor",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ValidationDummy"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {
              "SomeHeader": {
                "description": "TestHeader",
                "schema": {
                  "type": "string"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          },
          "200": {
            "description": "Replaced",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "deleteUsingDELETE",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
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
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      },
      "options": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "getOptionsUsingOPTIONS",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
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
                  "$ref": "#/components/schemas/OptionsClass"
                }
              }
            }
          }
        }
      },
      "head": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "isPresentUsingHEAD",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
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
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "patchUsingPATCH",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "requestBody": {
          "description": "requestBody. Test requestBody interceptor",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ValidationDummy"
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
                  "$ref": "#/components/schemas/ValidationDummy"
                }
              }
            }
          }
        }
      }
    },
    "/dummy/fileWithResponseAnnotation": {
      "get": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "getFileWithResponseAnnotationUsingGET",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
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
              "application/pdf": {
                "schema": {
                  "type": "string",
                  "format": "binary"
                }
              }
            }
          }
        }
      }
    },
    "/dummy/{id}/subpath/{anotherId}": {
      "get": {
        "tags": [
          "dummy-controller"
        ],
        "summary": "Interceptor summary",
        "operationId": "getTwoPathVariablesUsingGET",
        "parameters": [
          {
            "name": "Test-Global-Header",
            "in": "header",
            "description": "Some desc",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          },
          {
            "name": "anotherId",
            "in": "path",
            "description": ". Interceptor OperationParameter test",
            "required": true,
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
                  "$ref": "#/components/schemas/ValidationDummy"
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
      "Order": {
        "required": [
          "id"
        ],
        "type": "object",
        "properties": {
          "dateTime": {
            "type": "string",
            "description": ". Test schemaField interceptor",
            "format": "date-time"
          },
          "id": {
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "customer": {
            "description": ". Test schemaField interceptor",
            "$ref": "#/components/schemas/Customer"
          },
          "products": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "van": "Van",
                  "car": "Car",
                  "laptop": "Laptop"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Laptop"
                },
                {
                  "$ref": "#/components/schemas/Van"
                },
                {
                  "$ref": "#/components/schemas/Car"
                }
              ]
            }
          }
        },
        "description": ". Test schema interceptors"
      },
      "GenerationContext": {
        "type": "object",
        "properties": {
          "modelPackages": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "type": "string"
            }
          },
          "inheritanceMap": {
            "type": "object",
            "description": ". Test schemaField interceptor"
          }
        },
        "description": ". Test schema interceptors"
      },
      "Entity": {
        "required": [
          "id"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": ". Test schemaField interceptor"
          }
        },
        "description": ". Test schema interceptors"
      },
      "Laptop": {
        "description": ". Test schema interceptors",
        "allOf": [
          {
            "$ref": "#/components/schemas/Product"
          },
          {
            "required": [
              "hasWifi",
              "model"
            ],
            "type": "object",
            "properties": {
              "hasWifi": {
                "type": "boolean",
                "description": ". Test schemaField interceptor"
              },
              "model": {
                "type": "string",
                "description": ". Test schemaField interceptor"
              }
            }
          }
        ]
      },
      "Van": {
        "description": ". Test schema interceptors",
        "allOf": [
          {
            "$ref": "#/components/schemas/Car"
          },
          {
            "type": "object",
            "properties": {
              "maxLoad": {
                "type": "integer",
                "description": ". Test schemaField interceptor",
                "format": "int32"
              }
            }
          }
        ]
      },
      "Customer": {
        "required": [
          "vip",
          "id"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "vip": {
            "type": "boolean",
            "description": ". Test schemaField interceptor"
          },
          "topCustomerProduct": {
            "description": "Testing description. Test schemaField interceptor",
            "deprecated": false,
            "discriminator": {
              "propertyName": "type",
              "mapping": {
                "van": "Van",
                "car": "Car",
                "laptop": "Laptop"
              }
            },
            "oneOf": [
              {
                "$ref": "#/components/schemas/Laptop"
              },
              {
                "$ref": "#/components/schemas/Van"
              },
              {
                "$ref": "#/components/schemas/Car"
              }
            ]
          }
        },
        "description": ". Test schema interceptors"
      },
      "ValidationDummy": {
        "required": [
          "notNull"
        ],
        "type": "object",
        "properties": {
          "regex": {
            "pattern": "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b",
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "notNull": {
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "deprecated": {
            "type": "string",
            "description": ". Test schemaField interceptor",
            "deprecated": true
          },
          "minMax": {
            "maximum": 7,
            "minimum": 3,
            "type": "integer",
            "description": ". Test schemaField interceptor",
            "format": "int32"
          },
          "stringSizeOnlyMax": {
            "maxLength": 10,
            "minLength": 0,
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "decimalRange": {
            "maximum": 2.5,
            "minimum": 1.05,
            "type": "number",
            "description": ". Test schemaField interceptor",
            "format": "double"
          },
          "stringSize": {
            "maxLength": 10,
            "minLength": 2,
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "javaDeprecated": {
            "type": "string",
            "description": ". Test schemaField interceptor",
            "deprecated": true
          }
        },
        "description": ". Test schema interceptors"
      },
      "Product": {
        "required": [
          "amount",
          "price",
          "type",
          "id"
        ],
        "type": "object",
        "properties": {
          "amount": {
            "type": "integer",
            "description": ". Test schemaField interceptor",
            "format": "int32"
          },
          "price": {
            "type": "number",
            "description": ". Test schemaField interceptor",
            "format": "double"
          },
          "id": {
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "type": {
            "type": "string"
          }
        },
        "description": ". Test schema interceptors",
        "discriminator": {
          "propertyName": "type",
          "mapping": {
            "van": "Van",
            "car": "Car",
            "laptop": "Laptop"
          }
        }
      },
      "ListDummy": {
        "type": "object",
        "properties": {
          "cars": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "$ref": "#/components/schemas/Car"
            }
          },
          "enums": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "$ref": "#/components/schemas/CarType"
            }
          },
          "products": {
            "maxItems": 6,
            "minItems": 2,
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "van": "Van",
                  "car": "Car",
                  "laptop": "Laptop"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Laptop"
                },
                {
                  "$ref": "#/components/schemas/Van"
                },
                {
                  "$ref": "#/components/schemas/Car"
                }
              ]
            }
          },
          "integers": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "type": "integer"
            }
          }
        },
        "description": ". Test schema interceptors"
      },
      "CustomerInventory": {
        "type": "object",
        "properties": {
          "customers": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "$ref": "#/components/schemas/Customer"
            }
          }
        },
        "description": ". Test schema interceptors"
      },
      "OptionsClass": {
        "type": "object",
        "properties": {
          "options": {
            "type": "string",
            "description": ". Test schemaField interceptor"
          }
        },
        "description": ". Test schema interceptors"
      },
      "Header": {
        "required": [
          "required"
        ],
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "description": {
            "type": "string",
            "description": ". Test schemaField interceptor"
          },
          "required": {
            "type": "boolean",
            "description": ". Test schemaField interceptor"
          }
        },
        "description": ". Test schema interceptors"
      },
      "Car": {
        "description": ". Test schema interceptors",
        "examples": {
          "example_A": {
            "value": "{\n" +
                    "  \"id\": \"id-1\",\n" +
                    "  \"price\": 5000.00,\n" +
                    "  \"type\": \"car\",\n" +
                    "  \"amount\": 3,\n" +
                    "  \"model\": \"Lenovo\",\n" +
                    "  \"hasWifi\": false,\n" +
                    "  \"complex\": {\n" +
                    "    \"property\": \"value\"\n" +
                    "  }\n" +
                    "}"
          },
          "example_B": {
            "value": "{\n" +
                    "  \"id\": \"id-1\",\n" +
                    "  \"price\": 26000.00,\n" +
                    "  \"type\": \"car\",\n" +
                    "  \"amount\": 3,\n" +
                    "  \"complex\": {\n" +
                    "    \"property\": \"value\"\n" +
                    "  }\n" +
                    "}"
          }
        },
        "allOf": [
          {
            "$ref": "#/components/schemas/Product"
          },
          {
            "type": "object",
            "properties": {
              "carType": {
                "description": ". Test schemaField interceptor",
                "$ref": "#/components/schemas/CarType"
              },
              "torque": {
                "maximum": 1000,
                "minimum": 0,
                "type": "integer",
                "description": ". Test schemaField interceptor",
                "format": "int32"
              },
              "model": {
                "maxLength": 30,
                "minLength": 2,
                "type": "string",
                "description": ". Test schemaField interceptor",
                "examples": {
                  "someExample": {
                    "value": "field example"
                  }
                }
              },
              "maxSpeed": {
                "type": "integer",
                "description": ". Test schemaField interceptor",
                "format": "int32"
              }
            }
          }
        ]
      },
      "CarType": {
        "type": "string",
        "description": ". Test schema interceptors",
        "enum": [
          "PERSONAL",
          "TRUCK",
          "VAN"
        ]
      },
      "ArrayDummy": {
        "type": "object",
        "properties": {
          "primitiveIntegers": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "type": "integer"
            }
          },
          "cars": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "$ref": "#/components/schemas/Car"
            }
          },
          "integers": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "type": "integer"
            }
          },
          "products": {
            "type": "array",
            "description": ". Test schemaField interceptor",
            "items": {
              "discriminator": {
                "propertyName": "type",
                "mapping": {
                  "van": "Van",
                  "car": "Car",
                  "laptop": "Laptop"
                }
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Laptop"
                },
                {
                  "$ref": "#/components/schemas/Van"
                },
                {
                  "$ref": "#/components/schemas/Car"
                }
              ]
            }
          }
        },
        "description": ". Test schema interceptors"
      }
    }
  }
};

export default oas;
