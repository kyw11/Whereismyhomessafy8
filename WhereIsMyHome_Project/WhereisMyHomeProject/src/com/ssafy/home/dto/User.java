package com.ssafy.home.dto;

public class User {
	private String id;
	private String password;
	private String name;
	private String address;
	private String phonenumber;
	
	public User() {
		
	}
	public User(String id, String password, String name, String address, String phonenumber) {
		this.id = id;
		this.password = password;
		this.name = name;
		this.address = address;
		this.phonenumber = phonenumber;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	
}
