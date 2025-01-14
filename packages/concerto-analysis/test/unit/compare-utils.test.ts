import { ClassDeclaration, ModelFile, ModelManager, Property, Validator, Field } from '@accordproject/concerto-core';
import { getClassDeclarationType, getPropertyType, getValidatorType } from '../../src/compare-utils';

// This test suite should disappear once we port concerto-core to TypeScript because the error branches will be enforced by the transpiler.

const modelManager = new ModelManager();
const propertyAst = {
    name: 'myProp',
    type: 'Boolean'
};
const modelAst = {
    namespace: 'foo@1.0.0',
    properties: []
};
const modelFile = new ModelFile(modelManager, modelAst);
const classDeclaration = new ClassDeclaration(modelFile, modelAst);
const property = new Property(classDeclaration, propertyAst);
const field = new Field(classDeclaration, propertyAst);
const validator = new Validator(field, undefined);

test('should throw for unknown class declaration type', () => {
    expect(() => getClassDeclarationType(classDeclaration)).toThrow('unknown class declaration type "ClassDeclaration {id=foo@1.0.0.undefined super=Concept enum=false abstract=false}"');
});

test('should throw for unknown class property type', () => {
    expect(() => getPropertyType(property)).toThrow('unknown property type "[object Object]');
});

test('should throw for unknown validator type', () => {
    expect(() => getValidatorType(validator)).toThrow('unknown validator type "[object Object]');
});
