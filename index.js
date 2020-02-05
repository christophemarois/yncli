#!/usr/bin/env node

(async () => {
  const { value } = await require('prompts')({
    type: 'confirm',
    name: 'value',
    message: String(process.argv[2] || 'Are you sure?'),
  })

  process.exit(value ? 0 : 1)
})()