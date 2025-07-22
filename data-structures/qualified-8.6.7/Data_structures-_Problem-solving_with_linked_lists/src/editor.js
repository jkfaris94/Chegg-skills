const LinkedList = require("./lib/linkedList");

class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */
  insert(char) {
  const newNode = { value: char, next: null };

  if (!this.text.head) {
    // Empty list: insert at head and move cursor to it
    this.text.head = newNode;
    this.cursor = newNode;
  } else if (!this.cursor) {
    // Cursor is before head: insert at head
    newNode.next = this.text.head;
    this.text.head = newNode;
    this.cursor = newNode;
  } else {
    // Insert after cursor
    newNode.next = this.cursor.next;
    this.cursor.next = newNode;
    this.cursor = newNode;
  }

  return this;
}

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * @returns {Editor} a reference to this editor
   */
  delete() {
  if (!this.text.head || !this.cursor) return this;

  const [target, prev] = this.text.findWithPrevious((node) => node === this.cursor);

  if (target === this.text.head) {
    // Deleting head
    this.text.head = this.text.head.next;
    this.cursor = null;
  } else {
    // Skip over target
    prev.next = target.next;
    this.cursor = prev;
  }

  return this;
}

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {
  if (!this.cursor) return this;

  const [_, prev] = this.text.findWithPrevious((node) => node === this.cursor);
  this.cursor = prev ?? null;

  return this;
}

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference t this editor
   */
  arrowRight() {
  if (!this.cursor && this.text.head) {
    // From before head → to head
    this.cursor = this.text.head;
  } else if (this.cursor?.next) {
    this.cursor = this.cursor.next;
  }

  return this;
}
}

module.exports = Editor;
