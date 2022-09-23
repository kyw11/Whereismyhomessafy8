package com.ssafy.home.controller;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ssafy.home.dto.NoticeBoard;
import com.ssafy.home.model.service.NoticeBoardService;

public class NoticeBoardServlet extends HttpServlet{
	private NoticeBoardService noticeservice;
	@Override
	public void init() throws ServletException {
		noticeservice= NoticeBoardService.getInstance();
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//
		process(request,response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");
		process(request,response);
	}

	private void process(HttpServletRequest request, HttpServletResponse response) {
		String act=request.getParameter("act");
		switch(act) {
		case "noticelist":
			noticeList(request,response);
			break;
		}
	}
//select객체명
//insert객체명
	private void noticeList(HttpServletRequest request, HttpServletResponse response) {
		List<NoticeBoard> noticeboard = noticeservice.selectBoardList();
		//request공융영역
		
		forward();
	}


	
	

}
