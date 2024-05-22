import ComponentTest from "./comp_test";
import React from 'react';
import { act, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("test", () => {
    
    act(() => {
        render(<ComponentTest />);
      });
  
      // コンポーネントの取得
      const mainArea: HTMLDivElement = screen.getByTestId("mainbox");
      const submitButton = mainArea.children[2].children[0] as HTMLButtonElement;
      const textArea:HTMLTextAreaElement = screen.getByTestId("main_input") ;
      const textField = screen.getByTestId("result_area") as HTMLDivElement;
  it("test", async () => {

    // ボタンが非活性になっていて、テキストになにも表示されていない
    expect(submitButton.disabled).toBeTruthy();
    expect(textArea.value).toBe("");
    expect(textField.textContent).toBe("");

    // テキストを入力
    await userEvent.type(textArea, "test");

    // ボタンが活性になっているが、OKボタンが押されていないのでテキストになにも表示されていない
    expect(submitButton.disabled).toBeFalsy();
    expect(textArea.value).toBe("test");
    expect(textField.textContent).toBe("");

    // OKボタンを押下
    await userEvent.click(submitButton);

    // OKを押した後、textareaの内容がクリアされていて、テキストに期待された値が表示される
    screen.debug()
    expect(submitButton.disabled).toBeTruthy();
    expect(textArea.value).toBe("");
    expect(textField.textContent).toBe("test");
  });
});