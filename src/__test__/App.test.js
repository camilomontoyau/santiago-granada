/*
Variables globales 
  afterAll(fn, timeout)
  afterEach(fn, timeout)
  beforeAll(fn, timeout)
  beforeEach(fn, timeout)
  describe(name, fn)
  describe.each(table)(name, fn, timeout)
  describe.only(name, fn)
  describe.only.each(table)(name, fn)
  describe.skip(name, fn)
  describe.skip.each(table)(name, fn)
  test(name, fn, timeout)
  test.each(table)(name, fn, timeout)
  test.only(name, fn, timeout)
  test.only.each(table)(name, fn)
  test.skip(name, fn)
  test.skip.each(table)(name, fn)
  test.todo(name)

Funciones de comparacion
  expect(value)
  expect.extend(matchers)
  expect.anything()
  expect.any(constructor)
  expect.arrayContaining(array)
  expect.assertions(number)
  expect.hasAssertions()
  expect.not.arrayContaining(array)
  expect.not.objectContaining(object)
  expect.not.stringContaining(string)
  expect.not.stringMatching(string | regexp)
  expect.objectContaining(object)
  expect.stringContaining(string)
  expect.stringMatching(string | regexp)
  expect.addSnapshotSerializer(serializer)

Variables que se pueden utilizar con expect()

  .not
    Niega cualquier funcion
  .resolves
    Verifica si un metodo async fue resuelto
  .rejects
    Verifica si un metodo async fue rechazado
  .toBe(value)
    Que es igual a value
  .toHaveBeenCalled()
  .toHaveBeenCalledTimes(number)
  .toHaveBeenCalledWith(arg1, arg2, ...)
  .toHaveBeenLastCalledWith(arg1, arg2, ...)
  .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
  .toHaveReturned()
  .toHaveReturnedTimes(number)
  .toHaveReturnedWith(value)
  .toHaveLastReturnedWith(value)
  .toHaveNthReturnedWith(nthCall, value)
  .toHaveLength(number)
    Verifica si el array de entrada tiene un tamaño igual number
  .toHaveProperty(pathLlave, valor?)
    Permite saber si el objeto que se esta comaprando tiene una propiedad definida
    Opcionalmente se pueden definir un valor por defecto
  .toBeCloseTo(número, númeroDigitos?)
  .toBeDefined()
    Falla solo si se esta comparando con un valor undefined
  .toBeFalsy()
    Pasa si el valor es falso
  .toBeGreaterThan(número) 
    Compara el numero ingresado con el expect para ver si es mayor
  .toBeGreaterThanOrEqual(número)
    Compara el numero ingresado con el expect para saber si es mayor o igual
  .toBeLessThan(número)
    Menor que
  .toBeLessThanOrEqual(número)
    Menor o igual que
  .toBeInstanceOf(Class)
  .toBeNull()
    Pasa si el valor es nullo
  .toBeTruthy()
    Pasa si el valor es true
  .toBeUndefined()
    Pasa si el valor es undefined
  .toBeNaN()
    Pasa uncamente si el valor es nan //No es un numero
  .toContain(item)
    Verifica si existe el item en un array (No funciona para objetos)
  .toContainEqual(item)
    Permite ver si un objeto existe dentro de un array
  .toEqual(value)
    Valida si un valor es igual a otro como objetos
  .toMatch(regexpOrString) 
    Nos ayuda a decir si existen los carcteres en el string que se pasa
    Tambien recibe expresiones regulares
  .toMatchObject(object)
    Permite ver si un objeto contiene los keys y atributos definidos en object
  .toMatchSnapshot(propertyMatchers?, hint?)
  .toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)
  .toStrictEqual(value)
    Funciona para comparar arrays value = []
  .toThrow(error?)
  .toThrowErrorMatchingSnapshot(hint?)
  .toThrowErrorMatchingInlineSnapshot(inlineSnapshot)

*/
describe('Grupo de pruebas de ejemplo', () => {

    test('Una prueba unitaria de algo', () => {
      expect(10).toBe(10)
    })
  
    test('Segunda prueba de numeros', () => {
      expect(10).toBe(10)
    })
  })
  