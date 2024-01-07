"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const error_middleware_1 = __importDefault(require("../middleware/error-middleware"));
const publicRoutes_1 = __importDefault(require("../routes/publicRoutes"));
const usersRoutes_1 = __importDefault(require("../routes/usersRoutes"));
const learningRoutes_1 = __importDefault(require("../routes/learningRoutes"));
const swagger_1 = __importDefault(require("./swagger"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, swagger_1.default)(app);
app.use(publicRoutes_1.default);
app.use(learningRoutes_1.default);
app.use(usersRoutes_1.default);
app.use(error_middleware_1.default);
