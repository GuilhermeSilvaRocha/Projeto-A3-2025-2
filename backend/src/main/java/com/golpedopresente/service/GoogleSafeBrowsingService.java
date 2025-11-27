package com.golpedopresente.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;

@Service
public class GoogleSafeBrowsingService {

    @Value("${GOOGLE_SAFE_API_KEY}")
    private String apiKey;

    private static final String API_URL = 
        "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=";

    public boolean verificarUrl(String url) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            JSONObject body = new JSONObject()
                .put("client", new JSONObject()
                    .put("clientId", "golpedopresente")
                    .put("clientVersion", "1.0"))
                .put("threatInfo", new JSONObject()
                    .put("threatTypes", new String[]{"MALWARE", "SOCIAL_ENGINEERING"})
                    .put("platformTypes", new String[]{"ANY_PLATFORM"})
                    .put("threatEntryTypes", new String[]{"URL"})
                    .put("threatEntries", new JSONObject[]{ new JSONObject().put("url", url) })
                );

            String response = restTemplate.postForObject(API_URL + apiKey, body.toString(), String.class);
            return response != null && response.contains("threatType");
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
