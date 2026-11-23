using HakanBeratDemircan.Services;
using Microsoft.AspNetCore.Components;

namespace HakanBeratDemircan.Layout;

public abstract class LocalizedComponent : ComponentBase, IDisposable
{
    [Inject] protected LanguageService Language { get; set; } = default!;
    protected string T(string key) => Language.Translate(key);

    protected override void OnInitialized() => Language.LanguageChanged += Refresh;
    private void Refresh() => _ = InvokeAsync(StateHasChanged);
    public void Dispose()
    {
        Language.LanguageChanged -= Refresh;
        GC.SuppressFinalize(this);
    }
}
