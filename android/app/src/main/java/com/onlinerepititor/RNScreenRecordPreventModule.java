package com.onlinerepititor;

import android.view.WindowManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import android.util.Log;

public class RNScreenRecordPreventModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;
    public RNScreenRecordPreventModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }
  @Override
  public String getName() {
    return "RNScreenRecordPrevent";
  }
  @ReactMethod
  public void enable() {
    Log.d("RNScreenRecordPrevent","Xoroshiy bil ochen");
    this.reactContext.getCurrentActivity().runOnUiThread(new Runnable() {
        @Override
        public void run() {
          reactContext.getCurrentActivity().getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
        }
      });
  }
}