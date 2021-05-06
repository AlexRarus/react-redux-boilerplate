import React, { useState } from 'react';
import TinyEditor from 'src/components/tiny-editor';

import { Message } from './style';

export default function Lesson() {
  const [lessonHTML] = useState('');

  const onChangeLessonHTML = (HTML: string) => {
    console.log(HTML);
  };

  const imageUploadAction = (formData: FormData, success: any, failure: any) => {
    try {
      console.log('load image to server: ', formData);
      success && success();
    } catch (e) {
      failure && failure();
    }
  };

  return (
    <div>
      <Message>Заголовок</Message>
      <input type="text" />
      <Message>Текст занятия</Message>
      <TinyEditor
        initialValue={lessonHTML}
        onChange={onChangeLessonHTML}
        imageUploadAction={imageUploadAction}
      />
    </div>
  );
}
