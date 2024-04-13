### 구조 
redux state 

chatrooms {
    messages : {
        createdAt : Date,
    }[]
}

### 폴링
noSQL이니까 일정주기(ex 5초) firestore 쿼리를 날림

모든 챗룸에 대해서 가장 최근 메세지의 createdAt 보다 큰 메세지들 
있으면 어레이에 추가하고,
로컬에서 notReadedCount를 증가시킴

(선택)만약 새로고침해도 notReadedCount가 유지되려면 redux-persist를 사용해야함

### CRUD 구현
채팅룸, 채팅에 대한 CRUD구현 +
redux상태 관리