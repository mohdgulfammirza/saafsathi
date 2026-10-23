import React from "react";
import { Helmet } from "react-helmet-async";

export const Contact = () => {
  const phoneNumber = "+919634871123";
  const whatsappNumber = "9634871123";
  const whatsappMessage = encodeURIComponent("Hello enquiry ");
  const locationUrl = "https://maps.app.goo.gl/z1xKCFwfVohWGqa59?g_st=aw";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center p-4">
      <Helmet>
        <title>Contact Us | SaafSaathi</title>
        <meta
          name="description"
          content="Get in touch with SaafSaathi for home cleaning Products"
        />
      </Helmet>

      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-xl shadow-blue-200/50 border border-white/60 p-6 sm:p-8 transition-transform hover:-translate-y-1">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
            <span className="bg-emerald-100 text-emerald-700 p-2 rounded-full text-xl">
              🧹
            </span>
            Contact Us
          </h1>
          <p className="text-slate-500 mt-3 text-base border-b-2 border-dashed border-slate-200 pb-4">
            WHATSAPP || CALL || VISIT
          </p>
        </div>

        {/* Contact options */}
        <div className="flex flex-col gap-4">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 sm:gap-4 bg-slate-50 hover:bg-white p-4 rounded-2xl sm:rounded-full border-[1.5px] border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all"
          >
            <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-500 text-xl sm:text-2xl group-hover:scale-105 transition-transform">
              <i className="fab fa-whatsapp"></i>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-500">
                WhatsApp Support
              </p>
              <p className="text-base sm:text-lg font-bold text-emerald-700 leading-tight break-words">
                +91 96348 71123
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                <span>⏱</span> reply within 5 min
              </p>
            </div>

            <span className="hidden sm:inline-flex shrink-0 text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full whitespace-nowrap group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
              Chat →
            </span>
          </a>

          {/* Direct Call */}
          <a
            href={`tel:${phoneNumber}`}
            className="group flex items-center gap-3 sm:gap-4 bg-slate-50 hover:bg-white p-4 rounded-2xl sm:rounded-full border-[1.5px] border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all"
          >
            <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xl sm:text-2xl group-hover:scale-105 transition-transform">
              <i className="fas fa-phone-alt"></i>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-500">
                Direct Call
              </p>
              <p className="text-base sm:text-lg font-bold text-blue-800 leading-tight break-words">
                +91 96348 71123
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                <span>🎧</span> Mon–Sat, 9am – 8pm
              </p>
            </div>

            <span className="hidden sm:inline-flex shrink-0 text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full whitespace-nowrap group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
              Call →
            </span>
          </a>

          {/* 📍 Live Location */}
          <a
            href={locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 sm:gap-4 bg-slate-50 hover:bg-white p-4 rounded-2xl sm:rounded-full border-[1.5px] border-slate-200 hover:border-rose-300 shadow-sm hover:shadow-md transition-all"
          >
            <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-rose-50 text-rose-500 text-xl sm:text-2xl group-hover:scale-105 transition-transform">
              <i className="fas fa-map-marker-alt"></i>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-slate-500">
                Our Location
              </p>
              <p className="text-base sm:text-lg font-bold text-rose-700 leading-tight break-words">
                Visit Us on Maps store
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                <span>📍</span> Tap to view live location
              </p>
            </div>

            <span className="hidden sm:inline-flex shrink-0 text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full whitespace-nowrap group-hover:bg-rose-100 group-hover:text-rose-700 transition-colors">
              Map →
            </span>
          </a>

          {/* Divider */}
          <div className="flex items-center gap-3 text-xs text-slate-400 my-1">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></span>
            <span>or tap to connect instantly</span>
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></span>
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600 bg-slate-100 border border-slate-200 px-4 py-3 rounded-full text-center">
            <span className="text-emerald-600">🙂</span>
            <span>
              We're just one tap away — call, WhatsApp, or visit store us!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
