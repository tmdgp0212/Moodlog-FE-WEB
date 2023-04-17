import React from 'react'
import * as S from './style'

function registerForm() {
  return (
    <>
      <S.Input type="text" placeholder="사용하실 이메일을 입력해주세요" />
      <S.Input type="text" placeholder="사용하실 사용자명을 입력해주세요" />
      <S.Input type="text" placeholder="사용하실 비밀번호를을 입력해주세요" />
      <S.Input type="text" placeholder="비밀번호를 다시 한 번 입력해주세요" />
    </>
  )
}

export default registerForm