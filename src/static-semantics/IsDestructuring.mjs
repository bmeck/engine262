import { OutOfRange } from '../helpers.mjs';
import {
  isBindingIdentifier,
  isBindingPattern,
  isActualMemberExpression,
} from '../ast.mjs';

// #sec-for-in-and-for-of-statements-static-semantics-isdestructuring
//   ForDeclaration : LetOrConst ForBinding
export function IsDestructuring_ForDeclaration(ForDeclaration) {
  return IsDestructuring_ForBinding(ForDeclaration.declarations[0].id);
}

// #sec-for-in-and-for-of-statements-static-semantics-isdestructuring
//   ForBinding :
//     BindingIdentifier
//     BindingPattern
export function IsDestructuring_ForBinding(ForBinding) {
  switch (true) {
    case isBindingIdentifier(ForBinding):
      return false;
    case isBindingPattern(ForBinding):
      return true;
    case isActualMemberExpression(ForBinding):
      return false;
    default:
      throw new OutOfRange('IsDestructuring_ForBinding', ForBinding);
  }
}
