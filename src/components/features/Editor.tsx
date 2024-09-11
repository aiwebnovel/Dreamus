import React, { useCallback } from 'react'

import { EditorContent, useEditor } from '@tiptap/react'

import ImageResize from 'tiptap-extension-resize-image'

import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'

import EditorToolBar from '@components/features/EditorToolBar'

import styles from '@components/features/Editor.module.scss'

interface EditorProps {
  onChange: (content: string) => void
  content: string
}

function Editor({ onChange, content }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      Underline,
      TextStyle,
      Placeholder.configure({
        placeholder: '블로그 내용을 입력하세요!',
      }),
      Color,
      ImageResize,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const result = e.target?.result
          if (typeof result === 'string') {
            editor?.chain().focus().setImage({ src: result }).run()
          }
        }
        reader.readAsDataURL(file)
      }
    },
    [editor],
  )

  if (!editor) {
    return null
  }

  return (
    <div className={styles.editor}>
      <EditorToolBar editor={editor} onImageUpload={handleImageUpload} />
      <EditorContent editor={editor} className={styles.editor__content} />
    </div>
  )
}

export default Editor
