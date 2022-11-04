import { Block } from "payload/types";
import { blockFields } from "../../fields/blockFields";
import link from "../../fields/link";
import richText from "../../fields/richText";

export const CodeFeature: Block = {
  slug: 'codeFeature',
  fields: [
    blockFields({
      name: 'codeFeatureFields',
      fields: [
        richText(),
        link(),
        {
          type: 'row',
          fields: [
            {
              name: 'language',
              type: 'select',
              defaultValue: 'none',
              options: [
                {
                  label: 'None',
                  value: 'none',
                },
                {
                  label: 'JavaScript',
                  value: 'js',
                },
                {
                  label: 'TypeScript',
                  value: 'ts',
                },
              ]
            },
            {
              name: 'label',
              label: 'Code Label',
              type: 'text',
            },
          ]
        },
        {
          name: 'code',
          type: 'code',
          required: true,
        },
      ]
    })
  ]
}