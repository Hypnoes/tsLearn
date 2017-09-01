namespace Geometry {
    export interface IVector {
        toArray(callback: (cods: number[]) => void): void;
        length(): number;
        normalize(): void;
    }

    export interface IVector2D {
        /* ... */
    }

    export interface IVector3D {
        /* ... */
    }

    export class Vector2D implements IVector, IVector2D {
        private _x: number;
        private _y: number;
        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

        toArray(callback: (cods: number[]) => void): void {
            callback([this._x, this._y]);
        }

        length(): number {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        }

        normalize(): void {
            var len : number = 1 / this.length();
            this._x *= len;
            this._y *= len;
        }
    }

    export class Vector3D implements IVector, IVector3D {
        private _x: number;
        private _y: number;
        private _z: number;
        constructor(x: number, y: number, z: number) {
            this._x = x;
            this._y = y;
            this._z = z;
        }

        toArray(callback: (cods: number[]) => void): void {
            callback([this._x, this._y, this._z]);
        }

        length(): number {
            return Math.sqrt(this._x ** 3 + this._y ** 3 + this._z ** 3);
        }

        normalize(): void {
            var len : number = 1 / this.length();
            this._x *= len;
            this._y *= len;
            this._z *= len;
        }
    }
}

var vector2d : Geometry.IVector2D = new Geometry.Vector2D(1,1);
var vector3d : Geometry.IVector3D = new Geometry.Vector3D(1,1,1);
