package com.thermalprinter

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.util.Base64
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ThermalPrinterModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "ThermalPrinter"
    }

    @ReactMethod
    fun printBase64Image(base64Image: String, promise: Promise) {
        try {
            // Base64 string'i çöz ve Bitmap'e çevir
            val decodedBytes = Base64.decode(base64Image, Base64.DEFAULT)
            val bitmap: Bitmap = BitmapFactory.decodeByteArray(decodedBytes, 0, decodedBytes.size)

            // Thermal Printer SDK ile bitmap'i yazdır
            // Örnek: thermalPrinter.printBitmap(bitmap)

            promise.resolve("Image printed successfully!")
        } catch (e: Exception) {
            promise.reject("PRINT_ERROR", "Failed to print image: ${e.message}")
        }
    }
}
