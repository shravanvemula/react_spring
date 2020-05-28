package com.zemoso.todoapp.user.enitity;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "todo_app_user")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {

	@Id
	@Column(name = "id", updatable = false, nullable = false)
	private UUID id;

	@Column(name = "first_Name", updatable = true, nullable = false)
	private String firstName;

	@Column(name = "last_name", updatable = true, nullable = false)
	private String lastName;

	@Column(name = "email", updatable = true, nullable = false, unique = true)
	private String email;

	@Column(name = "created_by", updatable = true, nullable = true)
	private String createdBy;

	@Column(name = "created_on", updatable = true, nullable = true)
	private Date createdOn;

	@Column(name = "last_modified_by", updatable = true, nullable = true)
	private String lastModifiedBy;

	@Column(name = "last_modified_on", updatable = true, nullable = true)
	private Date lastModifiedOn;

	@Column(name = "password", updatable = true, nullable = false)
	private String password;

	@PrePersist
	public void initializeUUID() {
		if (id == null) {
			id = UUID.randomUUID();
		}
	}

}