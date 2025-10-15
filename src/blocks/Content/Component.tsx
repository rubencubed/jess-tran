'use client'

import Image from 'next/image'
import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import type { ContentBlock as ContentBlockProps } from '@/payload-types'
import { CMSLink } from '../../components/Link'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-4">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16 items-start">
        {columns?.map((col, index) => {
          const { enableLink, link, richText, size, image } = col

          return (
            <div
              key={index}
              className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                'md:col-span-2': size !== 'full',
              })}
            >
              {richText && <RichText data={richText} enableGutter={false} />}

              {image && typeof image === 'object' && 'url' in image && image.url && (
                <div className="mt-6">
                  <Image
                    src={image.url}
                    alt={image.alt || ''}
                    width={800}
                    height={800}
                    className="rounded-2xl object-cover shadow-md w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              {enableLink && <CMSLink {...link} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
