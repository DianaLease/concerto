/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ClassDeclaration, EnumValueDeclaration, Field, NumberValidator, Property, RelationshipDeclaration, StringValidator, Validator } from '@accordproject/concerto-core';

export function getClassDeclarationType(classDeclaration: ClassDeclaration) {
    if (classDeclaration.isAsset()) {
        return 'asset';
    } else if (classDeclaration.isConcept()) {
        return 'concept';
    } else if (classDeclaration.isEnum()) {
        return 'enum';
    } else if (classDeclaration.isEvent()) {
        return 'event';
    } else if (classDeclaration.isParticipant()) {
        return 'participant';
    } else if (classDeclaration.isTransaction()) {
        return 'transaction';
    } else {
        throw new Error(`unknown class declaration type "${classDeclaration}"`);
    }
}

export function getPropertyType(property: Property) {
    if (property instanceof Field) {
        return 'field';
    } else if (property instanceof RelationshipDeclaration) {
        return 'relationship';
    } else if (property instanceof EnumValueDeclaration) {
        return 'enum value';
    } else {
        throw new Error(`unknown property type "${property}"`);
    }
}

export function getValidatorType(validator: Validator) {
    if (validator instanceof NumberValidator) {
        return 'number';
    } else if (validator instanceof StringValidator) {
        return 'string';
    } else {
        throw new Error(`unknown validator type "${validator}"`);
    }
}
