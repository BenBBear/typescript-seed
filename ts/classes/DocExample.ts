/**
 * This is a file with a lots of typedoc examples.
 * /


/**
 * A class that print Helloworld greeting
 * @public
 * 
 * - Hello
 * - World
 * 
 * @see https://www.google.com/search?q=helloworld
 */
export default class Helloworld {
    /**
    * @param text  same as [[helloworld]]
    */
    constructor(text: string) {
        console.log(`Hello World From ${text}`);
    }
    
    /**
    * @param text  the name of who send the Helloworld Greeting. 
    */
    helloworld(text){
        console.log(`Hello World From ${text}`);
    }
}


/**
 * A useful utility function that print "Helloworld" into the console.
 * See [[Helloworld.helloworld]]
 * 
 * ```
 * console.log("Helloworld");
 * ```
 * 
 * @returns  Always return True.
 * @public
 */
export function helloworld(){
    console.log("Helloworld");
    return true;
}



/**
 * This is a doc comment for "protectedVar".
 * @protect
 */
export let protectedVar = 1



/**
 * A module that is documented as being private.
 * @private
 */
export module PrivateModule
{
    export function functionInsidePrivateModule() {}
}




/**
 * This is a simple Enumeration.
 */
export enum Directions
{
    /**
     * A simple enum member.
     */
    Top,

    /**
     * A simple enum member.
     */
    Right,

    /**
     * A simple enum member.
     */
    Bottom,

    /**
     * A simple enum member.
     */
    Left,

    /**
     * A composite enum member.
     */
    TopLeft = Top | Left,

    /**
     * A composite enum member.
     */
    TopRight = Top | Right
}



/**
 * A generic function
 *
 * @typeparam T  The generic type parameter.
 * @param value  A generic parameter.
 * @returns A generic return value.
 */
function test<T>(value:T):T {
    return value;
}



/**
 * A generic interface.
 *
 * @param T  The generic type parameter.
 */
interface A<T>
{
    /**
     * A generic member function.
     *
     * @return  A generic return value.
     */
    getT():T;
}


/**
 * A generic interface with two type parameters.
 *
 * @param <T>  The first generic type parameter.
 * @param <C>  The second generic type parameter.
 */
interface B<T, C>
{
    /**
     * A generic member function.
     *
     * @param value  A generic parameter.
     */
    setT(value:T):void;

    /**
     * A generic member function.
     *
     * @return  A generic return value.
     */
    getC():C;
}





/**
 * A generic interface extending two other generic interfaces
 * and setting one of the type parameters.
 *
 * @typeparam T  The leftover generic type parameter.
 */
interface AB<T> extends A<T>, B<T, boolean> {}