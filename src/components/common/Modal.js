import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  display: "block",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  transition: "opacity .15s linear",
  maxWidth: "500px",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "0.4rem",
  border: "0",
  overflowX: "hidden",
  overflowY: "auto",
  maxHeight: "calc(100vh - 75px)",
};

export default function CreateModal({
  icon,
  label,
  handleChange,
  handleAdd,
  open,
  setOpen,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        onClick={handleOpen}
        className="btn btn-primary float-right text-white"
      >
        +<i className={icon}></i> <span>{label}</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-header">
            <h5>Add new users</h5>
            <button type="button" className="close" onClick={handleClose}>
              &times;
            </button>
          </div>
          <div>
            <div className="col-sm-12">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  placeholder="Enter first name"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder="Enter lastname"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter staff name"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter user email address"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fa fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <select
                  name="role"
                  className="form-control"
                  onChange={handleChange}
                  defaultValue={0}
                >
                  <option disabled>Select role</option>
                  <option value="1">Support</option>
                  <option value="2">Manager</option>
                  <option value="3">Admin</option>
                </select>
              </div>
              <br />
              <div className="">
                <br />
                <button className="collb btn btn-info" onClick={handleAdd}>
                  Add
                </button>
                <br />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
