/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ProjectDefinition } from '@schematics/angular/utility/workspace';
import * as ts from 'typescript';
export declare function createStringLiteral(text: string, singleQuotes: boolean): ts.StringLiteral;
export declare function isAngularApplicationProject(project: ProjectDefinition): boolean;
