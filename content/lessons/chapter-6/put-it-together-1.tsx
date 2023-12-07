'use client'

import { ScriptingChallenge, LessonInfo } from 'ui'
import { EditorConfig } from 'types'
import { useTranslations } from 'hooks'
import { CodeExample, Text, Table } from 'ui'
import { useState } from 'react'
import { getLessonKey } from 'lib/progress'

export const metadata = {
  title: 'chapter_six.put_it_together_one.title',
  image: '/assets/images/chapter-4-intro-1.jpg',
  key: 'CH6PUT1',
}

const javascript = {
  program: `
  const testWitness = new Witness();

  const data1 = Buffer.from('Hello');
  testWitness.pushItem(data1);

  const data2 = Buffer.from('World');
  testWitness.pushItem(data2);

  const serializedData = testWitness.serialize() || '';
  console.log(serializedData.toString('hex') === '020548656c6c6f05576f726c64' && 'true')
  console.log("KILL")`,
  defaultFunction: {
    name: 'encode_message',
    args: ['text'],
  },
  defaultCode: `class Witness {
    constructor() {
        this.items = [];
    }

    pushItem(data) {
        // YOUR CODE HERE
    }

    serialize() {
        // YOUR CODE HERE
    }
}
`,
  validate: async (answer: string) => {
    if (answer) {
      if (answer === 'true') {
        return [true, 'Nicely Done']
      }
      return [
        false,
        'Ensure you are correctly pushing and serializing the data',
      ]
    }
    return [false, 'Return a value']
  },
  constraints: [
    {
      range: [7, 1, 9, 1],
      allowMultiline: true,
    },
    {
      range: [11, 1, 14, 1],
      allowMultiline: true,
    },
  ],
}

const python = {
  program: `
test_witness = Witness()

data1 = bytes('Hello', 'utf-8')
test_witness.push_item(data1)

data2 = bytes('World', 'utf-8')
test_witness.push_item(data2)

serialized_data = test_witness.serialize() or ''
print(serialized_data.hex() == '020548656c6c6f05576f726c64' and 'true')
print("KILL")`,
  defaultFunction: {
    name: 'encode_message',
    args: ['text'],
  },
  defaultCode: `from struct import pack

class Witness:
    def __init__(self):
        self.items = []

    def push_item(self, data):
        # YOUR CODE HERE

    def serialize(self):
        # YOUR CODE HERE
`,
  validate: async (answer: string) => {
    if (answer) {
      if (answer === 'true') {
        return [true, 'Nicely Done ']
      }
      return [false, 'Not a valid hex value']
    }
    return [false, 'Return a value']
  },
  constraints: [
    {
      range: [8, 1, 10, 1],
      allowMultiline: true,
    },
    {
      range: [11, 1, 12, 1],
      allowMultiline: true,
    },
  ],
}

const config: EditorConfig = {
  defaultLanguage: 'javascript',
  languages: {
    javascript,
    python,
  },
}

export default function PutItTogether1({ lang }) {
  const t = useTranslations(lang)

  const [language, setLanguage] = useState(config.defaultLanguage)
  const handleSelectLanguage = (language: string) => {
    setLanguage(language)
  }
  return (
    <ScriptingChallenge
      lang={lang}
      config={config}
      saveData
      lessonKey={getLessonKey('chapter-6', 'put-it-together-1')}
      successMessage={''}
      onSelectLanguage={handleSelectLanguage}
    >
      <LessonInfo>
        <Text className="font-nunito text-2xl font-bold text-white">
          {t('chapter_six.put_it_together_one.heading')}
        </Text>
        <Text className="mt-2 font-nunito text-xl text-white">
          {t('chapter_six.put_it_together_one.paragraph_one')}
        </Text>
        <CodeExample
          className="mt-4 font-space-mono"
          code={`push_item(data: bytes)`}
          language="shell"
        />
        <Text className="mt-4 font-nunito text-xl text-white">
          {t('chapter_six.put_it_together_one.paragraph_two')}
        </Text>
        <Text className="mt-4 font-nunito text-2xl font-bold text-white">
          {t('chapter_six.put_it_together_one.subheading_one')}
        </Text>
        <Table
          headings={[
            t('chapter_six.put_it_together_one.headings.item_one'),
            t('chapter_six.put_it_together_one.headings.item_two'),
            t('chapter_six.put_it_together_one.headings.item_three'),
            t('chapter_six.put_it_together_one.headings.item_four'),
          ]}
          rows={[
            [
              t('chapter_six.put_it_together_one.table_one.row_one.item_one'),
              t('chapter_six.put_it_together_one.table_one.row_one.item_two'),
              t('chapter_six.put_it_together_one.table_one.row_one.item_three'),
              t('chapter_six.put_it_together_one.table_one.row_one.item_four'),
            ],
            [
              t('chapter_six.put_it_together_one.table_one.row_two.item_one'),
              t('chapter_six.put_it_together_one.table_one.row_two.item_two'),
              t('chapter_six.put_it_together_one.table_one.row_two.item_three'),
              t('chapter_six.put_it_together_one.table_one.row_two.item_four'),
            ],
          ]}
        />
        <Text className="mt-4 font-nunito text-2xl font-bold text-white">
          {t('chapter_six.put_it_together_one.subheading_two')}
        </Text>
        <Table
          headings={[
            t('chapter_six.put_it_together_one.headings.item_one'),
            t('chapter_six.put_it_together_one.headings.item_two'),
            t('chapter_six.put_it_together_one.headings.item_three'),
            t('chapter_six.put_it_together_one.headings.item_four'),
          ]}
          rows={[
            [
              t('chapter_six.put_it_together_one.table_two.row_one.item_one'),
              t('chapter_six.put_it_together_one.table_two.row_one.item_two'),
              t('chapter_six.put_it_together_one.table_two.row_one.item_three'),
              t('chapter_six.put_it_together_one.table_two.row_one.item_four'),
            ],
            [
              t('chapter_six.put_it_together_one.table_two.row_two.item_one'),
              t('chapter_six.put_it_together_one.table_two.row_two.item_two'),
              t('chapter_six.put_it_together_one.table_two.row_two.item_three'),
              t('chapter_six.put_it_together_one.table_two.row_two.item_four'),
            ],
          ]}
        />
      </LessonInfo>
    </ScriptingChallenge>
  )
}
