import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; // 다른 컴포넌트에서 수정하지 못하도록 private

  // Retrieve
  getAllBoards() {
    return this.boards;
  }
}
