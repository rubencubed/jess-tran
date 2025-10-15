'use client'

import React from 'react'
import Image from 'next/image'
import type { Media } from '@/payload-types'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import RichText from '@/components/RichText'

interface ImageCard {
  image: Media
  content: DefaultTypedEditorState
}

interface ImageCardListProps {
  header: string
  cards: ImageCard[]
}

export const ImageCardListBlock: React.FC<ImageCardListProps> = ({ header, cards }) => {
  if (!cards?.length) return null

  return (
    <section className="mx-8 lg:mx-16">
      {header && <h2 className="mb-4 text-2xl">{header}</h2>}

      <div className="flex flex-col gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center md:flex-row gap-6 border border-gray-200 rounded-2xl shadow-sm p-4"
          >
            {typeof card.image === 'object' && card.image?.url && (
              <div className="relative w-full md:w-1/5 aspect-[4/3] shrink-0">
                <Image
                  src={card.image.url}
                  alt={card.image.alt || ''}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            <div className="w-full md:w-4/5">
              <RichText data={card.content} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageCardListBlock
