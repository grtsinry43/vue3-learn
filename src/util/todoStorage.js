const LOCAL_STORAGE_KEY = 'todos-vue3'

/**
 * 获取本地存储的数据
 * @returns {any}
 */
export function fetch() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
}

/**
 * 保存数据到本地存储
 * @param todos
 */
export function save(todos) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}

/**
 * 生成一个唯一的 id
 * @returns {string}
 */
export function generateId() {
  return Math.random().toString(36).substr(2, 9)
}
