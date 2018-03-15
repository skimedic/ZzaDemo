webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_init_guard__ = __webpack_require__("./src/app/shared/init-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard__ = __webpack_require__("./src/app/shared/can-deactivate-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_customers_list_component__ = __webpack_require__("./src/app/customers/customers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customers_customer_detail_customer_detail_component__ = __webpack_require__("./src/app/customers/customer-detail/customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_order_order_component__ = __webpack_require__("./src/app/orders/order/order.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__shared_init_guard__["a" /* InitGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__customers_customers_list_component__["a" /* CustomersListComponent */] },
            { path: 'customer-list', component: __WEBPACK_IMPORTED_MODULE_4__customers_customers_list_component__["a" /* CustomersListComponent */] },
            { path: 'customer-detail/:customerId', component: __WEBPACK_IMPORTED_MODULE_5__customers_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */] },
            { path: 'customer-add', component: __WEBPACK_IMPORTED_MODULE_5__customers_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */] },
            { path: 'order/:customerId', component: __WEBPACK_IMPORTED_MODULE_6__orders_order_order_component__["a" /* OrderComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__shared_can_deactivate_guard__["a" /* CanDeactivateGuard */]] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                    </button>\r\n            <a class=\"navbar-brand\" href=\"/\">\r\n                <div>\r\n                    <img alt=\"Brand\" src=\"/images/zza.png\" height=\"35px\" style=\"margin:-5px\"><span style=\"margin-left:20px\">Zza Pizza!</span>\r\n                </div>\r\n            </a>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a routerLink=\"/\" routerLinkActive=\"active\">Customers</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div style=\"height:40px\"></div>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_field_component__ = __webpack_require__("./src/app/shared/data-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_breeze_bridge2_angular__ = __webpack_require__("./node_modules/breeze-bridge2-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_breeze_client__ = __webpack_require__("./node_modules/breeze-client/breeze.debug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_breeze_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_breeze_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_zzarepository_service__ = __webpack_require__("./src/app/shared/zzarepository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customers_customers_list_component__ = __webpack_require__("./src/app/customers/customers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customers_customers_list_item_customers_list_item_component__ = __webpack_require__("./src/app/customers/customers-list-item/customers-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customers_customer_detail_customer_detail_component__ = __webpack_require__("./src/app/customers/customer-detail/customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_order_items_concat_products_pipe__ = __webpack_require__("./src/app/shared/order-items-concat-products.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_init_guard__ = __webpack_require__("./src/app/shared/init-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__orders_order_order_component__ = __webpack_require__("./src/app/orders/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__orders_product_list_product_list_component__ = __webpack_require__("./src/app/orders/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_can_deactivate_guard__ = __webpack_require__("./src/app/shared/can-deactivate-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
        __WEBPACK_IMPORTED_MODULE_6_breeze_client__["NamingConvention"].camelCase.setAsDefault();
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__customers_customers_list_component__["a" /* CustomersListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__customers_customers_list_item_customers_list_item_component__["a" /* CustomersListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__customers_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_order_items_concat_products_pipe__["a" /* OrderItemsConcatProductsPipe */],
                __WEBPACK_IMPORTED_MODULE_16__orders_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__orders_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_0__shared_data_field_component__["a" /* DataFieldComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_breeze_bridge2_angular__["a" /* BreezeBridgeHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_zzarepository_service__["a" /* ZzaRepositoryService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_init_guard__["a" /* InitGuard */],
                __WEBPACK_IMPORTED_MODULE_18__shared_can_deactivate_guard__["a" /* CanDeactivateGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customers/customer-detail/customer-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customers/customer-detail/customer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Customer Detail</h1>\r\n<div class=\"row\">\r\n  <form (ngSubmit)=\"onSave()\" class=\"form\" #theForm=\"ngForm\">\r\n    <!--<div class=\"form-group\">\r\n      <label for=\"firstName\">First Name:</label>\r\n      <input type=\"text\" name=\"firstName\" class=\"form-control\" [(ngModel)]=\"customer.firstName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\">Last Name:</label>\r\n      <input type=\"text\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"customer.lastName\" required minlength=\"4\" maxlength=\"15\"\r\n        #lastName=\"ngModel\">\r\n     </div>-->\r\n    <!--<div class=\"form-group\" [ngClass]=\"{'has-error': getValidationErrors('age')}\">\r\n      <label class=\"control-label\" for=\"age\">Age:</label>\r\n      <input type=\"text\" name=\"age\" class=\"form-control\" [(ngModel)]=\"customer.age\">\r\n      <span class=\"help-block\" *ngIf=\"getValidationErrors('age')\">{{getValidationErrors('age')}}</span>\r\n    </div>-->\r\n    <!--<div class=\"form-group\">\r\n      <label for=\"phone\">Phone:</label>\r\n      <input type=\"text\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"customer.phone\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email:</label>\r\n      <input type=\"text\" name=\"email\" class=\"form-control\" [(ngModel)]=\"customer.email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"street\">Street Address:</label>\r\n      <input type=\"text\" name=\"street\" class=\"form-control\" [(ngModel)]=\"customer.street\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"city\">City:</label>\r\n      <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"customer.city\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"state\">State:</label>\r\n      <input type=\"text\" name=\"state\" class=\"form-control\" [(ngModel)]=\"customer.state\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"zip\">Zip:</label>\r\n      <input type=\"text\" name=\"zip\" class=\"form-control\" [(ngModel)]=\"customer.zip\">\r\n    </div>-->\r\n    <zza-data-field [propName]=\"'firstName'\" [propLabel]=\"'First Name'\" [entity]=\"customer\"></zza-data-field>\r\n    <zza-data-field [propName]=\"'lastName'\" [propLabel]=\"'Last Name'\" [entity]=\"customer\"></zza-data-field>\r\n    <zza-data-field [propName]=\"'age'\" [propLabel]=\"'Age'\" [entity]=\"customer\"></zza-data-field>\r\n    <zza-data-field [propName]=\"'email'\" [propLabel]=\"'Email'\" [entity]=\"customer\"></zza-data-field>\r\n    <zza-data-field [propName]=\"'phone'\" [propLabel]=\"'Phone'\" [entity]=\"customer\"></zza-data-field>\r\n    <zza-data-field [propName]=\"'street'\" [propLabel]=\"'Street Address'\" [entity]=\"customer\"></zza-data-field>\r\n    <zza-data-field [propName]=\"'city'\" [propLabel]=\"'City'\" [entity]=\"customer\"></zza-data-field>\r\n    <zza-data-field [propName]=\"'state'\" [propLabel]=\"'State'\" [entity]=\"customer\"></zza-data-field>\r\n    <zza-data-field [propName]=\"'zip'\" [propLabel]=\"'Zip'\" [entity]=\"customer\"></zza-data-field>\r\n    <div class=\"form-group\" *ngIf=\"errorMessage\">\r\n      <div class=\"alert alert-danger\">{{errorMessage}}</div>\r\n    </div>\r\n    <div class=\"form-group alert alert-danger\" *ngIf=\"customer?.entityAspect?.hasValidationErrors\">\r\n      <ul>\r\n        <li *ngFor=\"let error of customer?.entityAspect?.getValidationErrors()\">{{error.errorMessage}}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"isEditMode\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th>Date</th>\r\n        <th>Order Items</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let order of orders\">\r\n        <td>{{order.orderDate | date: 'short'}}</td>\r\n        <td>{{order.items | orderitemsconcatproducts}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customers/customer-detail/customer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_entity_model__ = __webpack_require__("./src/app/model/entity-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_zzarepository_service__ = __webpack_require__("./src/app/shared/zzarepository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(_router, _route, _zzaRepository) {
        this._router = _router;
        this._route = _route;
        this._zzaRepository = _zzaRepository;
        this.customer = new __WEBPACK_IMPORTED_MODULE_3__model_entity_model__["a" /* Customer */]();
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._route.routeConfig.path !== "customer-add") {
            this.isEditMode = true;
            var id_1 = this._route.snapshot.params['customerId'];
            this._zzaRepository.getCustomer(id_1).then(function (customer) {
                _this.customer = customer;
                _this.customer.entityAspect.propertyChanged.subscribe(function (args) {
                    //console.log(`${args.propertyName}: was ${args.oldValue}, now ${args.newValue}`);
                });
                _this._zzaRepository.getCustomerOrderHistory(id_1).then(function (orders) { return _this.orders = orders; });
            }, function (error) {
                _this.errorMessage = error.message;
            });
        }
        else {
            this.customer = this._zzaRepository.createEntity("Customer");
        }
    };
    CustomerDetailComponent.prototype.onSave = function () {
        var _this = this;
        if (this.currentForm.invalid)
            return;
        this._zzaRepository.saveChanges().then(function () {
            _this._router.navigate(['customer-list']);
        }, function (error) {
            if (!error.entityErrors && error.message) {
                _this.errorMessage = error.message;
            }
        });
    };
    CustomerDetailComponent.prototype.getValidationErrors = function (propertyName) {
        if (!this.customer || !this.customer.entityAspect) {
            return;
        }
        this.customer.entityAspect.validateProperty(propertyName);
        var errors = this.customer.entityAspect.getValidationErrors(propertyName);
        if (errors && errors.length > 0) {
            var error_1 = '';
            errors.forEach(function (e) {
                if (error_1.trim()) {
                    error_1 += ', ';
                }
                error_1 += e.errorMessage;
            });
            return error_1;
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('theForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], CustomerDetailComponent.prototype, "currentForm", void 0);
    CustomerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-detail',
            template: __webpack_require__("./src/app/customers/customer-detail/customer-detail.component.html"),
            styles: [__webpack_require__("./src/app/customers/customer-detail/customer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_zzarepository_service__["a" /* ZzaRepositoryService */]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-list-item/customers-list-item.component.css":
/***/ (function(module, exports) {

module.exports = "hr.current-customer {\r\n  border-color: blue;\r\n  border-width: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/customers/customers-list-item/customers-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 10px\">\r\n  <hr [ngClass]=\"{ 'current-customer': isSelected }\" />\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">{{customer.firstName}} {{customer.lastName}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">{{customer.email}}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">{{customer.phone}}</div>\r\n    <div class=\"col-md-3\">{{customer.state}}</div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"isSelected\">\r\n    <div class=\"col-md-6\">\r\n      <a class=\"btn btn-primary\" routerLink=\"/customer-detail/{{customer.id}}\">Details</a>\r\n      <a class=\"btn btn-danger\" (click)=\"deleteCustomer()\">Delete</a>\r\n      <a class=\"btn btn-success\" routerLink=\"/order/{{customer.id}}\">Place Order</a>\r\n    </div>\r\n  </div>\r\n  <hr [ngClass]=\"{ 'current-customer': isSelected }\" />\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #deleteModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Delete Customer</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"deleteModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete this customer?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class='btn btn-default' (click)=\"deleteModal.hide()\">Cancel</button>\r\n        <button class=\"btn btn-danger\" (click)=\"confirmDeleteCustomer()\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/customers/customers-list-item/customers-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_entity_model__ = __webpack_require__("./src/app/model/entity-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_zzarepository_service__ = __webpack_require__("./src/app/shared/zzarepository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersListItemComponent = /** @class */ (function () {
    function CustomersListItemComponent(_zzaRepository) {
        this._zzaRepository = _zzaRepository;
        this.deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(CustomersListItemComponent.prototype, "selectedCustomer", {
        set: function (value) {
            if (value === this.customer) {
                this.isSelected = true;
            }
            else {
                this.isSelected = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    CustomersListItemComponent.prototype.ngOnInit = function () {
    };
    CustomersListItemComponent.prototype.deleteCustomer = function () {
        this.deleteModal.show();
    };
    CustomersListItemComponent.prototype.confirmDeleteCustomer = function () {
        var _this = this;
        this.deleteModal.hide();
        this._zzaRepository.deleteCustomer(this.customer).then(function (_) {
            return _this._zzaRepository.saveChanges();
        }).then(function (_) {
            return _this.deleted.emit();
        }, function (error) { return console.error(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('deleteModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* ModalDirective */])
    ], CustomersListItemComponent.prototype, "deleteModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__model_entity_model__["a" /* Customer */])
    ], CustomersListItemComponent.prototype, "customer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__model_entity_model__["a" /* Customer */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__model_entity_model__["a" /* Customer */]])
    ], CustomersListItemComponent.prototype, "selectedCustomer", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CustomersListItemComponent.prototype, "deleted", void 0);
    CustomersListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zza-customers-list-item',
            template: __webpack_require__("./src/app/customers/customers-list-item/customers-list-item.component.html"),
            styles: [__webpack_require__("./src/app/customers/customers-list-item/customers-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_zzarepository_service__["a" /* ZzaRepositoryService */]])
    ], CustomersListItemComponent);
    return CustomersListItemComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Customers</h1>\r\n<div class=\"row\" *ngIf=\"pageCount\">\r\n  <span>\r\n      <a class=\"btn btn-default\" (click)=\"pageDown()\">&lt;</a>{{currentPage}}/{{pageCount}}<a class=\"btn btn-default\" (click)=\"pageUp()\">&gt;</a>\r\n  </span>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <label for=\"searchInput\">Search:</label>\r\n  <input type=\"text\" name=\"searchInput\" autofocus [(ngModel)]=\"searchInput\">\r\n  <select [(ngModel)]=\"searchField\" (change)=\"search(searchTerm.value)\">\r\n            <option value=\"name\" selected>Name</option>\r\n            <option value=\"phone\">Phone</option>\r\n            <option value=\"email\">Email</option>\r\n  </select>\r\n  <button class=\"btn btn-primary\" routerLink=\"/customer-add\">Add Customer</button>\r\n</div>\r\n\r\n<div class=\"row\" *ngFor=\"let customer of customers\">\r\n  <zza-customers-list-item [customer]=\"customer\" [selectedCustomer]=\"selectedCustomer\"\r\n    (deleted)=\"refresh()\" (click)=\"onSelect(customer)\"></zza-customers-list-item>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customers/customers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_zzarepository_service__ = __webpack_require__("./src/app/shared/zzarepository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent(_zzaRepository, elementRef) {
        var _this = this;
        this._zzaRepository = _zzaRepository;
        this.elementRef = elementRef;
        this.searchField = 'name';
        this.currentPage = 1;
        this._pageSize = 5;
        var eventStream = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].fromEvent(elementRef.nativeElement, 'keyup')
            .map(function () { return _this.searchInput; })
            .debounceTime(500)
            .distinctUntilChanged();
        eventStream.subscribe(function (input) { return _this.search(input); });
    }
    CustomersListComponent.prototype.ngOnInit = function () {
        this.refresh(1);
    };
    CustomersListComponent.prototype.pageUp = function () {
        if (this.currentPage * this._pageSize >= this._totalRecords)
            return;
        var newPage = this.currentPage + 1;
        this.refresh(newPage);
    };
    CustomersListComponent.prototype.pageDown = function () {
        if (this.currentPage == 1)
            return;
        var newPage = this.currentPage - 1;
        this.refresh(newPage);
    };
    CustomersListComponent.prototype.refresh = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.searchInput = "";
        this._zzaRepository.getCustomers(page, this._pageSize).then(function (result) {
            _this.customers = result.customers;
            _this._totalRecords = result.totalRecords;
            _this.pageCount = Math.floor(_this._totalRecords / _this._pageSize);
            if (_this.pageCount < (_this._totalRecords / _this._pageSize))
                _this.pageCount += 1;
            _this.currentPage = page;
        }, function (error) { return console.error(error); });
    };
    CustomersListComponent.prototype.save = function () {
        var _this = this;
        this._zzaRepository.saveChanges().then(function () {
            _this.ngOnInit();
        }, function (error) { return console.error(error); });
    };
    CustomersListComponent.prototype.onSelect = function (customer) {
        this.selectedCustomer = customer;
    };
    CustomersListComponent.prototype.search = function (value) {
        var _this = this;
        this._zzaRepository.searchAsync(value, this.searchField).then(function (customers) {
            _this.customers = customers;
        });
    };
    CustomersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zza-customers-list',
            template: __webpack_require__("./src/app/customers/customers-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_zzarepository_service__["a" /* ZzaRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/app/model/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__("./src/app/model/entity-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Customer;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));



/***/ }),

/***/ "./src/app/model/entity-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityBase; });
var EntityBase = /** @class */ (function () {
    function EntityBase() {
    }
    Object.defineProperty(EntityBase.prototype, "$typeName", {
        get: function () {
            if (!this.entityAspect)
                return '';
            return this.entityAspect.getKey().entityType.shortName;
        },
        enumerable: true,
        configurable: true
    });
    return EntityBase;
}());



/***/ }),

/***/ "./src/app/model/entity-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer__ = __webpack_require__("./src/app/model/customer.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__customer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order__ = __webpack_require__("./src/app/model/order.ts");
/* unused harmony reexport Order */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_item__ = __webpack_require__("./src/app/model/order-item.ts");
/* unused harmony reexport OrderItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_item_option__ = __webpack_require__("./src/app/model/order-item-option.ts");
/* unused harmony reexport OrderItemOption */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_option__ = __webpack_require__("./src/app/model/product-option.ts");
/* unused harmony reexport ProductOption */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product__ = __webpack_require__("./src/app/model/product.ts");
/* unused harmony reexport Product */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_size__ = __webpack_require__("./src/app/model/product-size.ts");
/* unused harmony reexport ProductSize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_status__ = __webpack_require__("./src/app/model/order-status.ts");
/* unused harmony reexport OrderStatus */










/***/ }),

/***/ "./src/app/model/order-item-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderItemOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__("./src/app/model/entity-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var OrderItemOption = /** @class */ (function (_super) {
    __extends(OrderItemOption, _super);
    function OrderItemOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OrderItemOption;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));



/***/ }),

/***/ "./src/app/model/order-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__("./src/app/model/entity-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var OrderItem = /** @class */ (function (_super) {
    __extends(OrderItem, _super);
    function OrderItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OrderItem;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));



/***/ }),

/***/ "./src/app/model/order-status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__("./src/app/model/entity-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var OrderStatus = /** @class */ (function (_super) {
    __extends(OrderStatus, _super);
    function OrderStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OrderStatus;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));



/***/ }),

/***/ "./src/app/model/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__("./src/app/model/entity-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Order;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));



/***/ }),

/***/ "./src/app/model/product-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__("./src/app/model/entity-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var ProductOption = /** @class */ (function (_super) {
    __extends(ProductOption, _super);
    function ProductOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProductOption;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));



/***/ }),

/***/ "./src/app/model/product-size.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__("./src/app/model/entity-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var ProductSize = /** @class */ (function (_super) {
    __extends(ProductSize, _super);
    function ProductSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProductSize;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));



/***/ }),

/***/ "./src/app/model/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_base__ = __webpack_require__("./src/app/model/entity-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/// <code-import> Place custom imports between <code-import> tags
/// </code-import>
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Product;
}(__WEBPACK_IMPORTED_MODULE_0__entity_base__["a" /* EntityBase */]));



/***/ }),

/***/ "./src/app/model/registration-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer__ = __webpack_require__("./src/app/model/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order__ = __webpack_require__("./src/app/model/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_item__ = __webpack_require__("./src/app/model/order-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_item_option__ = __webpack_require__("./src/app/model/order-item-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_option__ = __webpack_require__("./src/app/model/product-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product__ = __webpack_require__("./src/app/model/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_size__ = __webpack_require__("./src/app/model/product-size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_status__ = __webpack_require__("./src/app/model/order-status.ts");








var RegistrationHelper = /** @class */ (function () {
    function RegistrationHelper() {
    }
    RegistrationHelper.register = function (metadataStore) {
        metadataStore.registerEntityTypeCtor('Customer', __WEBPACK_IMPORTED_MODULE_0__customer__["a" /* Customer */]);
        metadataStore.registerEntityTypeCtor('Order', __WEBPACK_IMPORTED_MODULE_1__order__["a" /* Order */]);
        metadataStore.registerEntityTypeCtor('OrderItem', __WEBPACK_IMPORTED_MODULE_2__order_item__["a" /* OrderItem */]);
        metadataStore.registerEntityTypeCtor('OrderItemOption', __WEBPACK_IMPORTED_MODULE_3__order_item_option__["a" /* OrderItemOption */]);
        metadataStore.registerEntityTypeCtor('ProductOption', __WEBPACK_IMPORTED_MODULE_4__product_option__["a" /* ProductOption */]);
        metadataStore.registerEntityTypeCtor('Product', __WEBPACK_IMPORTED_MODULE_5__product__["a" /* Product */]);
        metadataStore.registerEntityTypeCtor('ProductSize', __WEBPACK_IMPORTED_MODULE_6__product_size__["a" /* ProductSize */]);
        metadataStore.registerEntityTypeCtor('OrderStatus', __WEBPACK_IMPORTED_MODULE_7__order_status__["a" /* OrderStatus */]);
    };
    return RegistrationHelper;
}());



/***/ }),

/***/ "./src/app/orders/order/order.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Place Order</h3>\r\n  <div>\r\n    <button class=\"btn btn-primary\" (click)=\"submitOrder()\">Submit Order</button>\r\n    <button class=\"btn btn-default\" (click)=\"cancelOrder()\">Cancel Order</button>\r\n  </div>\r\n  <h4>Order Items:</h4>\r\n  <ul>\r\n    <li *ngFor=\"let item of orderItems\">{{item.product.name}} - {{item.size.name}}</li>\r\n  </ul>\r\n  <ul class=\"nav nav-tabs\">\r\n    <li [ngClass]=\"{'active': selectedTab === 'pizzas'}\">\r\n      <a (click)=\"selectedTab = 'pizzas'\">Pizzas</a>\r\n    </li>\r\n    <li [ngClass]=\"{'active': selectedTab === 'salads'}\">\r\n      <a (click)=\"selectedTab = 'salads'\">Salads</a>\r\n    </li>\r\n    <li [ngClass]=\"{'active': selectedTab === 'drinks'}\">\r\n      <a (click)=\"selectedTab = 'drinks'\">Drinks</a>\r\n    </li>\r\n  </ul>\r\n  <zza-product-list [products]=\"pizzas\" (addProduct)=\"addToOrder($event)\" *ngIf=\"selectedTab === 'pizzas'\" [productType]=\"'pizza'\"></zza-product-list>\r\n  <zza-product-list [products]=\"salads\" (addProduct)=\"addToOrder($event)\" *ngIf=\"selectedTab === 'salads'\" [productType]=\"'salad'\"></zza-product-list>\r\n  <zza-product-list [products]=\"drinks\" (addProduct)=\"addToOrder($event)\" *ngIf=\"selectedTab === 'drinks'\" [productType]=\"'drink'\"></zza-product-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/orders/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_zzarepository_service__ = __webpack_require__("./src/app/shared/zzarepository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = /** @class */ (function () {
    function OrderComponent(_zzaRepository, _route, _router) {
        this._zzaRepository = _zzaRepository;
        this._route = _route;
        this._router = _router;
        this._order = null;
        this._customerId = '';
        this.orderItems = [];
        this.pizzas = [];
        this.salads = [];
        this.drinks = [];
        this.selectedTab = "pizzas";
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._customerId = this._route.snapshot.params['customerId'];
        if (!this._customerId) {
            this._router.navigate(['']);
        }
        else {
            var orderStatuses = this._zzaRepository.getOrderStatuses();
            orderStatuses.forEach(function (os) { if (os.name == "Ordered")
                _this._orderedStatusId = os.id; });
            this._zzaRepository.getProducts().then(function (products) {
                products.forEach(function (product) {
                    switch (product.type) {
                        case 'pizza':
                            _this.pizzas.push(product);
                            break;
                        case 'salad':
                            _this.salads.push(product);
                            break;
                        case 'drink':
                            _this.drinks.push(product);
                            break;
                        default:
                            break;
                    }
                });
            });
        }
    };
    OrderComponent.prototype.canDeactivate = function () {
        this.cancelOrder();
        return true;
    };
    OrderComponent.prototype.addToOrder = function (itemInfo) {
        if (!this._order) {
            this._order = this._zzaRepository.createEntity("Order");
            this._order.customerId = this._customerId;
            this._order.orderStatusId = this._orderedStatusId;
            this._order.orderDate = new Date();
        }
        var orderItem = this._zzaRepository.createEntity("OrderItem");
        orderItem.orderId = this._order.id;
        orderItem.product = itemInfo.product;
        orderItem.size = itemInfo.size;
        // orderItem.productId = itemInfo.product.id;
        // orderItem.productSizeId = itemInfo.size.id;
        this._order.items.push(orderItem);
        this.orderItems.push(orderItem);
    };
    OrderComponent.prototype.submitOrder = function () {
        var _this = this;
        if (this._order == null)
            return;
        this._zzaRepository.submitOrder(this._order).then(function (_) {
            _this._order = null;
            _this.orderItems = [];
            alert("Order placed!");
            _this._router.navigate(['/']);
        }, function (error) {
            alert("Error saving order: " + error.message);
        });
    };
    OrderComponent.prototype.cancelOrder = function () {
        if (this._order == null)
            return;
        var entityManager = this._order.entityAspect.entityManager;
        console.log(entityManager.getChanges());
        this._order.entityAspect.rejectChanges();
        this.orderItems.forEach(function (oi) { return oi.entityAspect.rejectChanges(); });
        //entityManager.rejectChanges();
        console.log(entityManager.getChanges());
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zza-order',
            template: __webpack_require__("./src/app/orders/order/order.component.html"),
            styles: [__webpack_require__("./src/app/orders/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_zzarepository_service__["a" /* ZzaRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/orders/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n  <tbody>\r\n    <tr *ngFor=\"let product of products\" (click)=\"selectProduct(product)\" [ngClass]=\"{'success': product === selectedProduct}\">\r\n      <td><img src=\"/images/{{product.image}}\" /></td>\r\n      <td width=\"50%\"><span style=\"font-weight: bold\">{{product.name}}</span><br /><span>{{product.description}}</span></td>\r\n      <td>\r\n        <select class=\"form-control\" [(ngModel)]=\"selectedProductSizeId\" *ngIf=\"product === selectedProduct\" style=\"width: 200px\">\r\n          <option *ngIf=\"selectedProductSizeId == -1\" value=\"-1\">Select Product Size</option>\r\n          <option *ngFor=\"let productSize of productSizes\" [ngValue]=\"productSize.id\">{{productSize.name}}</option>\r\n        </select>\r\n      </td>\r\n      <td><button class=\"btn btn-primary\" (click)=\"addToOrder()\"\r\n        [disabled]=\"product !== selectedProduct || (selectedProductSizeId === -1)\">Add to Order</button>\r\n      </td>\r\n\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/orders/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_zzarepository_service__ = __webpack_require__("./src/app/shared/zzarepository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_zzaRepository) {
        this._zzaRepository = _zzaRepository;
        this.selectedProductSizeId = -1;
        this.addProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.productSizes = this._zzaRepository.getProductSizes(this.productType);
    };
    ProductListComponent.prototype.selectProduct = function (product) {
        this.selectedProduct = product;
    };
    ProductListComponent.prototype.addToOrder = function () {
        var _this = this;
        var size = this.productSizes.find(function (ps) { return ps.id === _this.selectedProductSizeId; });
        this.selectedProductSizeId = -1;
        this.addProduct.emit({ product: this.selectedProduct, size: size });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ProductListComponent.prototype, "products", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ProductListComponent.prototype, "productType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ProductListComponent.prototype, "addProduct", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zza-product-list',
            template: __webpack_require__("./src/app/orders/product-list/product-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_zzarepository_service__["a" /* ZzaRepositoryService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/shared/can-deactivate-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/shared/data-field.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"form-group\" [ngClass]=\"{'has-error': getValidationErrors()}\">\r\n      <label class=\"control-label\" for=\"{{propName}}\">{{propLabel}}:</label>\r\n      <input type=\"text\" name=\"{{propName}}\" class=\"form-control\" [(ngModel)]=\"dataProp\">\r\n      <span class=\"help-block\" *ngIf=\"getValidationErrors()\">{{getValidationErrors()}}</span>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/shared/data-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataFieldComponent = /** @class */ (function () {
    function DataFieldComponent() {
    }
    Object.defineProperty(DataFieldComponent.prototype, "dataProp", {
        get: function () {
            return this.entity && this.propName ? this.entity[this.propName] : '';
        },
        set: function (value) {
            if (this.entity && this.propName && this.entity.entityAspect) {
                this.entity.entityAspect.clearValidationErrors();
                this.entity[this.propName] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    DataFieldComponent.prototype.getValidationErrors = function () {
        if (!this.entity || !this.entity.entityAspect || !this.propName) {
            return null;
        }
        this.entity.entityAspect.validateProperty(this.propName);
        var errors = this.entity.entityAspect.getValidationErrors(this.propName);
        if (errors && errors.length > 0) {
            var error_1 = '';
            errors.forEach(function (e) {
                if (error_1.trim()) {
                    error_1 += ', ';
                }
                error_1 += e.errorMessage;
            });
            return error_1;
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DataFieldComponent.prototype, "propName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DataFieldComponent.prototype, "propLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DataFieldComponent.prototype, "entity", void 0);
    DataFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'zza-data-field',
            template: __webpack_require__("./src/app/shared/data-field.component.html")
        })
    ], DataFieldComponent);
    return DataFieldComponent;
}());



/***/ }),

/***/ "./src/app/shared/init-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zzarepository_service__ = __webpack_require__("./src/app/shared/zzarepository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InitGuard = /** @class */ (function () {
    function InitGuard(_zzaRepository) {
        this._zzaRepository = _zzaRepository;
    }
    InitGuard.prototype.canActivate = function () {
        return this._zzaRepository.initialize();
    };
    InitGuard.prototype.canActivateChild = function () {
        return this.canActivate();
    };
    InitGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__zzarepository_service__["a" /* ZzaRepositoryService */]])
    ], InitGuard);
    return InitGuard;
}());



/***/ }),

/***/ "./src/app/shared/order-items-concat-products.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderItemsConcatProductsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderItemsConcatProductsPipe = /** @class */ (function () {
    function OrderItemsConcatProductsPipe() {
    }
    OrderItemsConcatProductsPipe.prototype.transform = function (value, args) {
        var orderItems = value;
        var result = "";
        if (orderItems) {
            var first_1 = true;
            orderItems.forEach(function (oi) {
                if (!first_1)
                    result += ", ";
                first_1 = false;
                result += oi.product.name;
            });
        }
        return result;
    };
    OrderItemsConcatProductsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderitemsconcatproducts'
        })
    ], OrderItemsConcatProductsPipe);
    return OrderItemsConcatProductsPipe;
}());



/***/ }),

/***/ "./src/app/shared/zzarepository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZzaRepositoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_breeze_client__ = __webpack_require__("./node_modules/breeze-client/breeze.debug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_breeze_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_breeze_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_registration_helper__ = __webpack_require__("./src/app/model/registration-helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZzaRepositoryService = /** @class */ (function () {
    function ZzaRepositoryService() {
        var _this = this;
        // private _em: EntityManager = new EntityManager('http://localhost:10942/breeze/zza');
        this._em = new __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityManager"]('https://skimediczzademowebapi.azurewebsites.net/breeze/zza');
        this._customersCached = false;
        __WEBPACK_IMPORTED_MODULE_2__model_registration_helper__["a" /* RegistrationHelper */].register(this._em.metadataStore);
        this._em.entityChanged.subscribe(function (args) {
            // console.log(`${args.entity.entityType.name} ${args.entityAction.toString()}`);
            var changes = _this._em.getChanges();
            var chStr = _this._em.exportEntities(changes);
            localStorage['changeCache'] = chStr;
        });
    }
    ZzaRepositoryService.prototype.initialize = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this._initialized) {
                resolve(true);
            }
            else {
                _this._initialized = true;
                var existingChanges = localStorage['changeCache'];
                if (existingChanges) {
                    localStorage.removeItem('changeCache');
                    _this._em.importEntities(existingChanges);
                }
                _this._em.executeQuery(__WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('Lookups')).then(function (lookupsResponse) {
                    resolve(true);
                }, function (error) { return console.error(error); });
            }
        });
        return promise;
    };
    ZzaRepositoryService.prototype.getOrderStatuses = function () {
        return this._em.executeQueryLocally(__WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('OrderStatuses'));
    };
    ZzaRepositoryService.prototype.getProductSizes = function (productType) {
        return this._em.executeQueryLocally(__WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('ProductSizes').where('type', 'equals', productType));
    };
    ZzaRepositoryService.prototype.getProducts = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var query = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('Products');
            var products = _this._em.executeQueryLocally(query);
            if (products && products.length > 0) {
                resolve(products);
                return;
            }
            _this._em.executeQuery(query).then(function (response) {
                resolve(response.results);
            }, function (error) { return reject(error); });
        });
        return promise;
    };
    ZzaRepositoryService.prototype.getCustomers = function (page, pageSize) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var query = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('Customers')
                .orderBy(['state', 'lastName'])
                .skip((page - 1) * pageSize)
                .take(pageSize)
                .inlineCount();
            _this._em.executeQuery(query).then(function (queryResult) {
                _this._customersCached = true;
                resolve({ customers: queryResult.results, totalRecords: queryResult.inlineCount });
            }, function (error) { return reject(error); });
        });
        return promise;
    };
    ZzaRepositoryService.prototype.getCustomerSummaries = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var query = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('Customers')
                .select(['firstName', 'lastName', 'email', 'phone', 'state']);
            _this._em.executeQuery(query).then(function (queryResult) { return resolve(queryResult.results); }, function (error) { return reject(error); });
        });
        return promise;
    };
    ZzaRepositoryService.prototype.getCustomer = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var query = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('Customers').where('id', 'equals', id);
            var strategy;
            if (!_this._customersCached) {
                strategy = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FetchStrategy"].FromServer;
            }
            else {
                strategy = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FetchStrategy"].FromLocalCache;
            }
            _this._em.executeQuery(query.using(strategy)).then(function (response) {
                if (response.results && response.results.length === 1) {
                    resolve((response.results[0]));
                }
                else {
                    resolve(null);
                }
            }, function (error) { return reject(error); });
        });
        return promise;
    };
    ZzaRepositoryService.prototype.getCustomerById = function (id) {
        return this._em.getEntityByKey('Customer', id);
    };
    ZzaRepositoryService.prototype.getCustomersWithChanges = function () {
        return this._em.getEntities('Customers', [__WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityState"].Added, __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityState"].Modified, __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityState"].Deleted]);
    };
    ZzaRepositoryService.prototype.getCustomerOrderHistory = function (customerId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var query = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('Orders')
                .where('customerId', __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FilterQueryOp"].Equals, customerId)
                .expand(['items', 'items.product', 'items.options']);
            _this._em.executeQuery(query).then(function (queryResult) {
                resolve((queryResult.results));
            }, function (error) { return reject(error); });
        });
        return promise;
    };
    ZzaRepositoryService.prototype.createEntity = function (typeName) {
        var options = {};
        if (typeName === 'Customer') {
            options.id = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["core"].getUuid();
            // console.log(options.id);
        }
        return this._em.createEntity(typeName, options);
    };
    ZzaRepositoryService.prototype.deleteCustomer = function (customer) {
        return this.getCustomerOrderHistory(customer.id).then(function (orders) {
            orders.slice().forEach(function (o) {
                o.items.slice().forEach(function (oi) {
                    oi.options.slice().forEach(function (opt) { return opt.entityAspect.setDeleted(); });
                    oi.entityAspect.setDeleted();
                });
                o.entityAspect.setDeleted();
            });
            customer.entityAspect.setDeleted();
        });
    };
    ZzaRepositoryService.prototype.saveChanges = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._em.saveChanges().then(function () { return resolve(); }, function (error) { return reject(error); });
        });
        return promise;
    };
    ZzaRepositoryService.prototype.search = function (searchTerm, field) {
        var pred;
        if (field === 'name') {
            pred = new __WEBPACK_IMPORTED_MODULE_1_breeze_client__["Predicate"]('firstName', __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FilterQueryOp"].Contains, searchTerm)
                .or(new __WEBPACK_IMPORTED_MODULE_1_breeze_client__["Predicate"]('lastName', __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FilterQueryOp"].Contains, searchTerm));
        }
        else {
            pred = new __WEBPACK_IMPORTED_MODULE_1_breeze_client__["Predicate"](field, __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FilterQueryOp"].Contains, searchTerm);
        }
        var query = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('Customers').where(pred);
        return this._em.executeQueryLocally(query);
    };
    ZzaRepositoryService.prototype.searchAsync = function (searchTerm, field) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var pred;
            if (field === 'name') {
                pred = new __WEBPACK_IMPORTED_MODULE_1_breeze_client__["Predicate"]('firstName', __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FilterQueryOp"].Contains, searchTerm)
                    .or(new __WEBPACK_IMPORTED_MODULE_1_breeze_client__["Predicate"]('lastName', __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FilterQueryOp"].Contains, searchTerm));
            }
            else {
                pred = new __WEBPACK_IMPORTED_MODULE_1_breeze_client__["Predicate"](field, __WEBPACK_IMPORTED_MODULE_1_breeze_client__["FilterQueryOp"].Contains, searchTerm);
            }
            var query = __WEBPACK_IMPORTED_MODULE_1_breeze_client__["EntityQuery"].from('Customers').where(pred);
            _this._em.executeQuery(query)
                .then(function (queryResult) { return resolve((queryResult.results)); }, function (error) { return reject(error); });
        });
        return promise;
    };
    ZzaRepositoryService.prototype.submitOrder = function (order) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var items = [order];
            order.items.forEach(function (oi) { return items.push(oi); });
            _this._em.saveChanges(items).then(function (_) { return resolve(); }, function (error) { return console.error(error); });
        });
        return promise;
    };
    ZzaRepositoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ZzaRepositoryService);
    return ZzaRepositoryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map