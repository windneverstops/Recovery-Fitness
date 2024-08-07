/**
 * This needs:
 * 1. Title
 * 2. Rich text description
 * 
 */
import type { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import type { GlobalConfig } from "payload/types";

const TrainingOptions: GlobalConfig = {
  slug: 'trainingOptions',
  label: 'Training Options',
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'trainingOptions',
      type: 'array',
      fields:[
        {
          name: 'title',
          type: 'text',
          required : true
        },
        {
          name: 'description',
          type: 'richText',
          required: true
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'assets',
          required: true
        }
      ],
      admin:{
        components:{
          RowLabel: ({data, index}: RowLabelArgs) =>{
            return data.title
          }
        },
      },
     
    },
  ]
}

export default TrainingOptions