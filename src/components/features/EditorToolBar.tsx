import { Editor } from '@tiptap/react'

import * as Icons from '@components/features/EditorIcon'

interface ToolBarProps {
  editor: Editor | null
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function EditorToolBar({ editor, onImageUpload }: ToolBarProps) {
  if (!editor) {
    return null
  }

  return (
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
          <Icons.TextBackground size={20} color="black" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <Icons.Underline size={20} color="black" />
        </button>
        <div>
          <input
            type="color"
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              editor.chain().focus().setColor(event.target.value).run()
            }
            id="text-color"
            style={{ display: 'none' }}
            value={editor.getAttributes('textStyle').color || '#000000'}
            data-testid="setColor"
          />
          <label htmlFor="text-color" className="button">
            <Icons.TextColor size={20} color="black" />
          </label>
        </div>
        <div className="button-group">
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            style={{ display: 'none' }}
            id="image-upload"
          />
          <label htmlFor="image-upload" className="button">
            <Icons.ImageUpload size={20} color="black" />
          </label>
        </div>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <Icons.Blockquote size={20} color="black" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <Icons.OrderedList size={20} color="black" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <Icons.UnOrderedList size={20} color="black" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          <Icons.TextLeft size={20} color="black" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={
            editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
          }
        >
          <Icons.TextCenter size={20} color="black" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          <Icons.TextRight size={20} color="black" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={
            editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
          }
        >
          <Icons.TextUnset size={20} color="black" />
        </button>
        <ul>
          <Icons.ParagraphSize size={20} color="black" />
          <li>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
              }
            >
              H1
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
              }
            >
              H2
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={
                editor.isActive('heading', { level: 3 }) ? 'is-active' : ''
              }
            >
              H3
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
              className={
                editor.isActive('heading', { level: 4 }) ? 'is-active' : ''
              }
            >
              H4
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
              }
              className={
                editor.isActive('heading', { level: 5 }) ? 'is-active' : ''
              }
            >
              H5
            </button>
          </li>
        </ul>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Icons.HorizontalLine size={20} color="black" />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          Redo
        </button>
      </div>
    </div>
  )
}

export default EditorToolBar
