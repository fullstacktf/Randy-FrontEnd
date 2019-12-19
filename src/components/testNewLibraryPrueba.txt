/**
 * Para aprender a hacer una funcion abstracta y terminar haciendo
 * más eficientes la legibilidad de los códigos en el test
 */

/*

import React from "react";
// import { AddRecipeForm } from "../AddRecipeForm";
import { fireEvent, render } from "@testing-library/react";
const renderAddRecipeForm = () => {
    const utils = render(<AddRecipeForm/>);
    const titleField = utils.getByPlaceholderText(/Título de la receta/i);
    const changeValueOfTitleField = (value: string) => fireEvent.change(titleField, { target: { value } });
    const getDescriptionField = () => utils.queryByText(/Descripción de la receta/i);
    return {
        ...utils,
        titleField,
        getDescriptionField,
        changeValueOfTitleField
    };
};
describe('AddRecipeForm', () => {
    describe('render', () => {
        test('Should render the title input field', () => {
            const { titleField } = renderAddRecipeForm();
            expect(titleField).not.toBeUndefined();
        });
        test('Should not show the description field if the title field is empty', () => {
            const { queryByText } = render(<AddRecipeForm/>);
            const myDescriptionField = queryByText(/Descripción de la receta/i);
            expect(myDescriptionField).toBeNull();
        });
        test('Should show the description field if the length of title field is more than 3', () => {
            const { queryByPlaceholderText, queryByText } = render(<AddRecipeForm/>);
            const myTitleField = queryByPlaceholderText(/Título de la receta/);
            if (myTitleField) {
                fireEvent.change(myTitleField, { target: { value: 'asdf' } });
                const myDescriptionField = queryByText(/Descripción de la receta/i);
                expect(myDescriptionField).not.toBeNull();
            }
        });
        test('Should hide the description field if the length of title field is reduced in 3 chars', () => {
            const { queryByPlaceholderText, queryByText } = render(<AddRecipeForm/>);
            const myTitleField = queryByPlaceholderText(/Título de la receta/);
            expect(myTitleField).not.toBeNull();
            if (myTitleField) {
                fireEvent.change(myTitleField, { target: { value: 'asdf' } });
                const myDescriptionField = queryByText(/Descripción de la receta/i);
                expect(myDescriptionField).not.toBeNull();
                fireEvent.change(myTitleField, { target: { value: '2' } });
                const myDescriptionField2 = queryByText(/Descripción de la receta/i);
                expect(myDescriptionField2).toBeNull();
            }
        });
        test('Should hide the description field if the length of title field is reduced in 3 chars', () => {
            const { getDescriptionField, changeValueOfTitleField } = renderAddRecipeForm();
            changeValueOfTitleField('asdf');
            expect(getDescriptionField()).not.toBeNull();
            changeValueOfTitleField('as');
            expect(getDescriptionField()).toBeNull();
        });
    });
});

*/
