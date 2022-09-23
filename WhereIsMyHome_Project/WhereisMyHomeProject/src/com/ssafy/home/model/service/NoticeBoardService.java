package com.ssafy.home.model.service;

import java.util.List;

import com.ssafy.home.dto.NoticeBoard;
import com.ssafy.home.model.dao.NoticeBoardDaoImpl;

public class NoticeBoardService {
	
	private NoticeBoardDaoImpl noticeboarddao = NoticeBoardDaoImpl.getInstance();
	public List<NoticeBoard> selectBoardList(){
		return noticeboarddao.selectNoticeList();
	}
}
