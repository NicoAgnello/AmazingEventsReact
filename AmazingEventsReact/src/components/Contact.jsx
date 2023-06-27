import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <section className="altura-total bg-secondary">
        <h1 className="col-12 bg-secondary text-center py-4">Contact Us</h1>
        <div className=" d-flex flex-column align-items-center justify-content-center m-2">
          <form
            action="#"
            method="get"
            className="formulario1 d-flex flex-column justify-content-start align-items-center gap-3 py-5 rounded"
          >
            <div className="form-floating mb-3 ">
              <input type="text" className="form-control input-mail-name" id="floatingName" placeholder="name" />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control input-mail-name"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label className="input-mail-name" htmlFor="floatingInput">
                Email address
              </label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control input-text-area"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label className="text-center label-comments" htmlFor="floatingTextarea">Comments</label>
            </div>
            <div className=" justify-content-center">
              <button className=" btn btn-primary col-12" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
