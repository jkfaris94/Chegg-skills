import React from "react";
import { act, fireEvent, render, waitFor, screen } from "@testing-library/react";
import App from "../App";
import PostCreate from "../PostCreate"
import userEvent from "@testing-library/user-event";

describe("App", () => {
    test('does NOT contain a form with name="edit" until user edits a post', () => {
        const { container } = render(<App />);
        expect(container.querySelector('form[name="edit" i]')).toBeNull();
    });
    describe("includes necessary structure to create a post", () => {
        test('a form with name="create"', () => {
            const { container } = render(<App />);
            expect(container.querySelector('form[name="create" i]')).toBeTruthy();
        });
        describe("create form contains", () => {
            test('a <select name="type">', () => {
                const { container } = render(<App />);
                const select = container.querySelector(
                    'form[name="create" i] select[name="type" i]'
                );
                expect(select).toBeTruthy();
            });
            test('a <button type="submit">', () => {
                const { container } = render(<App />);
                const selectbutton = container.querySelector(
                    'form[name="create" i] button[type="submit" i]'
                );
                expect(selectbutton).toBeTruthy();
            });
            test('a <select name="type"> with opions "Text" and "Image" (case sensitive)', () => {
                const { container } = render(<App />);
                const options = container.querySelectorAll(
                    'form[name="create" i] select[name="type" i] option'
                );
                expect(options).toHaveLength(2);
                options.forEach((option) => {
                    expect(option.textContent).toEqual(
                        expect.stringMatching(/Text|Image/)
                    );
                });
            });
            test('a <textarea name="content"> when selector is set to "Text"', () => {
                const { container } = render(<App />);

                const select = container.querySelector(
                    'form[name="create" i] select[name="type" i]'
                );
                userEvent.selectOptions(select, ["Text"]);

                const textArea = container.querySelector(
                    'form[name="create" i] textarea[name="content" i]'
                );
                expect(textArea).toBeTruthy();
            });
            test('an <input name="content"> when selector is set to "Image"', async () => {

                const { container } = render(<App />);

                const select = container.querySelector(
                    'form[name="create" i] select[name="type" i]'
                );

                await act(() => userEvent.selectOptions(select, ["Image"]))

                const input = container.querySelector(
                    'form[name="create" i] input[name="content" i]'
                );

                expect(input).toBeTruthy();
            });
        });
    });
    describe("can add a", () => {
        it("Text post", async () => {
            const { container } = render(<App />);

            const select = container.querySelector(
                'form[name="create" i] select[name="type" i]'
            );

            await act(() => {
                userEvent.selectOptions(select, ["Text"]);
            })

            const textArea = container.querySelector(
                'form[name="create" i] textarea[name="content" i]'
            );
//           console.log(textArea)

            await act(() => {
                fireEvent.change(textArea, { target: { value: "Good Day" } });
            })

            const submitButton = container.querySelector(
                'form[name="create" i] button[type="submit" i]'
            );
            await act(() => {
                fireEvent(
                    submitButton,
                    new MouseEvent("click", {
                        bubbles: true,
                        cancelable: true,
                    })
                );
            })

            expect(container.querySelectorAll(".post")).toHaveLength(1);
        });
        it("Image post", async () => {
           const {container, getByRole} = render(<App />);
          await act(async () => {
            fireEvent.change(getByRole('combobox', { name: /type/i }), {
              target: { value: 'Image' },
            });
          });
          let input = await getByRole('textbox', { name: /content/i });
          
          await act(() => {
            fireEvent.change(input, { target: { value: "https://picsum.photos/200/300" } });
          })
          
          const submitButton = container.querySelector(
                'form[name="create" i] button[type="submit" i]'
            );
          await act(() => {
            fireEvent(
              submitButton,
              new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
              })
            );
          })
          
          expect(container.querySelectorAll(".post")).toHaveLength(1);
          expect(container.querySelectorAll("img")).toHaveLength(1);
        });
    });
  describe("can delete a", () => {
    it("Text post", async () => {
      const { container } = render(<App />);

            const select = container.querySelector(
                'form[name="create" i] select[name="type" i]'
            );
            await act(() => {
                userEvent.selectOptions(select, ["Text"]);
            })

            const textArea = container.querySelector(
                'form[name="create" i] textarea[name="content" i]'
            );

            await act(() => {
                fireEvent.change(textArea, {
                    target: { value: "Java is to JavaScript what car is to Carpet" },
                });
            })

            const submitButton = container.querySelector(
                'form[name="create" i] button[type="submit" i]'
            );

            await act(() => {
                fireEvent(
                    submitButton,
                    new MouseEvent("click", {
                        bubbles: true,
                        cancelable: true,
                    })
                );
            })

            const deleteButton = container.querySelector(
                '.post button[name="delete" i]'
            );

            await act(() => {
                fireEvent(
                    deleteButton,
                    new MouseEvent("click", {
                        bubbles: true,
                        cancelable: true,
                    })
                );
            })

            expect(container.querySelectorAll(".post")).toHaveLength(0);
        });
    it("Image post", async () => {
       const {container, getByRole} = render(<App />);
    
    await act(async () => {
      fireEvent.change(getByRole('combobox', { name: /type/i }), {
        target: { value: 'Image' },
      });
    });
    
    let input = await getByRole('textbox', { name: /content/i });
    
    await act(() => {
              fireEvent.change(input, { target: { value: "https://picsum.photos/200/300" } });
            })

            const submitButton = container.querySelector(
                'form[name="create" i] button[type="submit" i]'
            );

            await act(() => {
                fireEvent(
                    submitButton,
                    new MouseEvent("click", {
                        bubbles: true,
                        cancelable: true,
                    })
                );
            })

      const deleteButton = container.querySelector(
        '.post button[name="delete" i]'
      );
      
      await act(() => {
        fireEvent(
          deleteButton,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
      })
      
      expect(container.querySelectorAll(".post")).toHaveLength(0);
    });
  });
});
