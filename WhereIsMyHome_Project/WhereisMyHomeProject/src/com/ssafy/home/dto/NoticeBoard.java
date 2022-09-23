package com.ssafy.home.dto;

import java.util.Date;

public class NoticeBoard {
	private int textNumber;
	private String noticetitle;
	private String writer;
	private String date;
	private int see;
	
	public NoticeBoard() {
		
	}
	public NoticeBoard(int textNumber, String noticetitle, String writer, String date, int see) {
		this.textNumber = textNumber;
		this.noticetitle = noticetitle;
		this.writer = writer;
		this.date = date;
		this.see = see;
	}
	public int getTextNumber() {
		return textNumber;
	}
	public void setTextNumber(int textNumber) {
		this.textNumber = textNumber;
	}
	public String getNoticetitle() {
		return noticetitle;
	}
	public void setNoticetitle(String noticetitle) {
		this.noticetitle = noticetitle;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getSee() {
		return see;
	}
	public void setSee(int see) {
		this.see = see;
	}
	
}
