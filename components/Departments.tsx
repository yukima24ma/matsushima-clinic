'use client'

import { useState } from 'react'

const departments = [
  { en: 'INTERNAL MEDICINE', ja: '内科', desc: '風邪・生活習慣病・高血圧・動脈硬化症など、幅広い内科疾患の診療を行います。' },
  { en: 'DIABETES & METABOLISM', ja: '糖尿病・代謝内科', desc: '糖尿病・脂質異常症を専門に診療。インスリン治療の外来導入にも対応しています。' },
  { en: 'PEDIATRICS', ja: '小児科', desc: '乳幼児から中学生まで、お子様の健康を専門的にサポートします。' },
  { en: 'HEALTH CHECK-UP', ja: '健康診断', desc: '企業健診・定期健診・生命保険診査など、各種健康診断を実施しています。' },
  { en: 'VACCINATION', ja: '予防接種', desc: 'インフルエンザ・各種ワクチン接種を実施。専門外来として幅広く対応しています。' },
]

export default function Departments() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="departments" style={{ background: '#f4f7fb', padding: '88px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 11,
              color: '#3a7fd4',
              letterSpacing: '0.24em',
              marginBottom: 12,
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
            }}
          >
            DEPARTMENTS
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-noto-serif-jp), serif',
              fontSize: 32,
              fontWeight: 400,
              color: '#1e2530',
              marginBottom: 12,
            }}
          >
            診療科
          </h2>
          <p
            style={{
              fontSize: 14,
              color: '#5a6472',
              fontFamily: 'var(--font-noto-sans-jp), sans-serif',
              fontWeight: 300,
            }}
          >
            専門的な医療をわかりやすく、丁寧にご提供します。
          </p>
        </div>

        {/* 3x2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 2,
          }}
        >
          {departments.map((dept, i) => {
            const isHovered = hovered === i
            const isFirstCol = i % 3 === 0
            const showLeftBorder = isHovered || isFirstCol

            return (
              <div
                key={dept.en}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff',
                  padding: '36px 32px',
                  borderLeft: `3px solid ${showLeftBorder ? '#1a4c7c' : 'transparent'}`,
                  boxShadow: isHovered ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
                  transition: 'border-left-color 0.15s, box-shadow 0.15s',
                  cursor: 'default',
                }}
              >
                <p
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    color: '#8a96a3',
                    marginBottom: 10,
                    fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                  }}
                >
                  {dept.en}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-noto-serif-jp), serif',
                    fontSize: 20,
                    color: '#1e2530',
                    marginBottom: 14,
                  }}
                >
                  {dept.ja}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 300,
                    color: '#5a6472',
                    lineHeight: 1.8,
                    fontFamily: 'var(--font-noto-sans-jp), sans-serif',
                  }}
                >
                  {dept.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
