package com.ssafy.home.model.dao;

import java.util.List;

import com.ssafy.home.dto.NoticeBoard;

public class NoticeBoardDaoImpl {
//목록을 가져와요
	private static NoticeBoardDaoImpl instance = new NoticeBoardDaoImpl();
	private NoticeBoardDaoImpl() {
		
	}
	public static NoticeBoardDaoImpl getInstance() {
		return instance;
	}
	public List<NoticeBoard> selectNoticeList(){
		
		return 
		
	}
}

