import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
// import Bold from '@tiptap/extension-bold'
// import Italic from '@tiptap/extension-italic'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

import styles from '@components/features/Editor.module.scss'

import * as Icons from '@components/features/EditorIcon'

function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      Underline,
      TextStyle,
      Color,
    ],
    content: '<p>블로그 글을 작성하세요...</p>',
  })

  if (!editor) {
    return null
  }

  return (
    <div className={styles.editor}>
      <div className="control-group">
        <div className="button-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            <Icons.Bold size={20} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <Icons.Italic size={20} color="black" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'is-active' : ''}
          >
            Toggle highlight
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
          >
            Toggle underline
          </button>
          <input
            type="color"
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            // value={editor.getAttributes('textStyle').color}
            value={editor.getAttributes('textStyle').color || '#000000'}
            data-testid="setColor"
          />
        </div>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}

export default Editor
