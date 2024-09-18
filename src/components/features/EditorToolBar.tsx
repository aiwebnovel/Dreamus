import { useState } from 'react'

import { Editor } from '@tiptap/react'

import * as Icons from '@components/features/EditorIcon'

import styles from '@components/features/EditorToolBar.module.scss'

interface ToolBarProps {
  editor: Editor | null
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type Level = 1 | 2 | 3 | 4 | 5 | 6

function EditorToolBar({ editor, onImageUpload }: ToolBarProps) {
  const [showFontSizes, setShowFontSizes] = useState<boolean>(false)

  if (!editor) {
    return null
  }

  const headingLevels: Level[] = [1, 2, 3, 4, 5]

  return (
    <div className={styles.toolBar}>
      <div className={styles.toolBar__btns}>
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Icons.RotateLeft size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Icons.RotateRight size={25} color="black" />
        </button>
        <div className={styles.toolBar__listContainer}>
          <button
            type="button"
            onClick={() => setShowFontSizes(!showFontSizes)}
          >
            <Icons.ParagraphSize size={25} color="black" />
          </button>
          {showFontSizes && (
            <ul className={styles.toolBar__listContainer__list}>
              {headingLevels.map((level) => (
                <li key={level}>
                  <button
                    type="button"
                    onClick={() => {
                      editor.chain().focus().toggleHeading({ level }).run()
                      setShowFontSizes(!showFontSizes)
                    }}
                    className={
                      editor.isActive('heading', { level }) ? 'is-active' : ''
                    }
                  >
                    H{level}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <Icons.Bold size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <Icons.Italic size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <Icons.Underline size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive('highlight') ? 'is-active' : ''}
        >
          <Icons.TextBackground size={25} color="black" />
        </button>
        <div className={styles.toolBar__btns__colors}>
          <input
            type="color"
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            id="text-color"
            value={editor.getAttributes('textStyle').color || '#000000'}
            data-testid="setColor"
          />
          <label htmlFor="text-color" className="button">
            <Icons.TextColor size={25} color="black" />
          </label>
        </div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <Icons.Blockquote size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <Icons.OrderedList size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <Icons.UnOrderedList size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          <Icons.TextLeft size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={
            editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
          }
        >
          <Icons.TextCenter size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          <Icons.TextRight size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={
            editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
          }
        >
          <Icons.TextUnset size={25} color="black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Icons.HorizontalLine size={25} color="black" />
        </button>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            style={{ display: 'none' }}
            id="image-upload"
          />
          <label htmlFor="image-upload" className="button">
            <Icons.ImageUpload size={25} color="black" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default EditorToolBar
