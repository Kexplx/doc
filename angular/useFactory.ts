function httpClientFactory(httpClient: NgHttpClient, mockHttpClient: MockHttpClient): AppHttpClient {
  if (environment.production) {
    return httpClient;
  }

  return mockHttpClient;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: 'HTTP_CLIENT',
      useFactory: httpClientFactory,
      deps: [NgHttpClient, MockHttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}