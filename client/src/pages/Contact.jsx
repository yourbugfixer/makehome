import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../utils/Utility";
import { contactSchema, classes } from "../utils/Validation";
import { InputRow, Textarea, DropDown, Button } from "../utils/formControls";
import Swal from "sweetalert2";
import PageTitle from "../components/PageTitle";

function Contact() {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    api
      .post("/contact", {
        contact_name: data.contact_name,
        contact_subject: data.contact_subject,
        contact_email: data.contact_email,
        contact_phone: data.contact_phone,
        contact_message: data.contact_message,
        contact_status: "Active",
      })
      .then((res) => {
        if (res.data.success === 1) {
          reset();
        }
        Swal.fire({
          position: "top-end",
          text: res.data.message,
          icon: "success",
          showConfirmButton: false,
          toast: true,
          timer: 2000,
        });
      });
  };

  return (
    <>
      {/* <!--Page Title--> */}
      <PageTitle title="Contact Us" />

      {/* <!--Page Info--> */}
      <section class="page-info">
        <div class="auto-container clearfix">
          <div class="pull-left">
            <h2>Contact Us</h2>
          </div>
          <div class="pull-right">
            <ul class="bread-crumb clearfix">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!--Contact Section--> */}
      <section class="contact-section">
        <div class="auto-container">
          <div class="row clearfix">
            {/* <!--Form Column --> */}
            <div class="column form-column col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="sec-title medium">
                <h2>Message Us</h2>
              </div>
              {/* <!--form-box--> */}
              <div class="form-box default-form">
                <div class="contact-form default-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="row clearfix">
                      <DropDown
                        ref={register}
                        classes={{
                          ...classes,
                          pClass: "col-md-6 col-sm-6 col-xs-12",
                        }}
                        name="contact_subject"
                        placeholder="Select subject"
                        error={!!errors.contact_subject}
                        helperText={errors?.contact_subject?.message}
                      >
                        <option value="Interior Design">Interior Design</option>
                        <option value="Interior Design">Plumbing</option>
                        <option value="Interior Design">Real Estate</option>
                      </DropDown>

                      <InputRow
                        ref={register}
                        classes={{
                          ...classes,
                          pClass: "col-md-6 col-sm-6 col-xs-12",
                        }}
                        name="contact_name"
                        placeholder="Your Name *"
                        error={!!errors.contact_name}
                        helperText={errors?.contact_name?.message}
                      />

                      <InputRow
                        ref={register}
                        classes={{
                          ...classes,
                          pClass: "col-md-6 col-sm-6 col-xs-12",
                        }}
                        name="contact_email"
                        placeholder="Your Mail *"
                        error={!!errors.contact_email}
                        helperText={errors?.contact_email?.message}
                      />

                      <InputRow
                        ref={register}
                        classes={{
                          ...classes,
                          pClass: "col-md-6 col-sm-6 col-xs-12",
                        }}
                        name="contact_phone"
                        placeholder="Phone Number *"
                        error={!!errors.contact_phone}
                        helperText={errors?.contact_phone?.message}
                      />

                      <Textarea
                        ref={register}
                        classes={classes}
                        name="contact_message"
                        placeholder="Message *"
                        error={!!errors.contact_message}
                        helperText={errors?.contact_message?.message}
                      />

                      <Button className="theme-btn btn-style-two">
                        GET QUOTE
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <!--Column--> */}
            <div class="column info-column col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="sec-title medium">
                <h2>Contact Details</h2>
              </div>
              <div class="desc-text">
                There are many variations off +1800 854 5864 available, but the
                majority have ut suffered alterattions in some forms by injected
                humour looks events slightly seds believable ut seds do eiusmod
                tempor incididunt labore.
              </div>
              <div class="info-style-one">
                <ul>
                  <li>
                    <div class="icon-box">
                      <span class="flaticon-international-delivery"></span>
                    </div>
                    <h4>Address :</h4>
                    <div class="text">
                      Main Office - <br />
                      <a href="geo:28.577090,77.122410" target="_blank">
                        Hill view hospital road,
                        <br /> Bariatu basti, Bariatu,
                        <br /> Ranchi, Jharkhand{" "}
                      </a>
                      <br />
                      <br />
                      Branchi Office -
                    </div>
                  </li>
                  <li>
                    <div class="icon-box">
                      <span class="flaticon-envelope"></span>
                    </div>
                    <h4>Mail :</h4>
                    <div class="text">
                      <a href="mailto:mdsaifullah657@gmail.com">
                        mdsaifullah657@gmail.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div class="icon-box">
                      <span class="flaticon-phone-call"></span>
                    </div>
                    <h4>Call US:</h4>
                    <div class="text">
                      <a href="tel:9693222426">+91 9693222426</a>, &nbsp;
                      <a href="tel:9334552551">+91 9334552551</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Map Section--> */}
      <section class="map-section">
        <div class="map-outer">
          {/* <!--Map Canvas--> */}
          <div
            class="map-canvas"
            id="contact-google-map"
            data-zoom="10"
            data-lat="23.815811"
            data-lng="90.412580"
            data-type="roadmap"
            data-hue="#fc721e"
            data-title="Dhaka"
            data-content="Dhaka 1000-1200, Bangladesh<br><a href='mailto:info@youremail.com'>info@youremail.com</a>"
            style={{ height: "480px" }}
          ></div>
        </div>
      </section>
    </>
  );
}

export default Contact;
